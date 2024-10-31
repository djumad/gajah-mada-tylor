import { z } from 'zod';

export const formSchema = z
	.object({
		username: z.string().min(1, { message: 'username harus diisi.' }),
		nama: z.string().min(1, { message: 'Nama harus diisi.' }),
		jenis_kelamin: z.enum(['L', 'P']),
		alamat: z.string().min(1, { message: 'Alamat harus diisi.' }),
		email: z.string().email({ message: 'Format email tidak valid.' }),
		nomor_hp: z
			.string()
			.min(10, { message: 'Nomor Telepon minimal 10 angka.' })
			.regex(/^\d+$/, { message: 'Nomor Telepon hanya boleh berisi angka.' }),
		password: z.string().min(8, { message: 'Password minimal 8 karakter.' }),
		config_password: z.string().min(8, { message: 'Konfirmasi Password minimal 8 karakter.' })
	})
	.refine((data) => data.password === data.config_password, {
		message: 'Password dan Konfirmasi Password harus sama.',
		path: ['config_password']
	});
