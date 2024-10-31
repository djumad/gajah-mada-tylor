import pb from '$lib/pb';
import { formSchema } from '$lib/validation';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';

export const actions = {
    default: async (event) => {
        const formData = Object.fromEntries(await event.request.formData());

        try {
            const validatedData = formSchema.parse(formData);

            // Cek apakah username sudah ada
            // const existingUsername = await pb.collection('users').getFirstListItem(`username="${validatedData.nama.replace(/\s+/g, '')}"`);
            // if (existingUsername !== null || undefined) {
            //     console.log(existingUsername);
            //     console.log('Username sudah terdaftar');
            //     return { usernameError: 'Username sudah terdaftar'};
            // }

            // Cek apakah email sudah ada
            const existingEmail = await pb.collection('users').getFirstListItem(`email="${validatedData.email}"`);
            if (existingEmail !== null || undefined) {
                console.log('Email sudah terdaftar.');
                return {emailError: 'Email sudah terdaftar.'};
            }

            const dataToStore = {
                ...validatedData,
                passwordConfirm: validatedData.config_password,
                role: 'pelanggan',
            }; 

            const record = await pb.collection('users').create(dataToStore);

            return { success: true, record };
        } catch (error) {
            console.log(error);
            if (error instanceof z.ZodError) {
                return fail(400, { errors: error.flatten().fieldErrors });
            }
            return fail(500, { message: 'Terjadi kesalahan server.' });
        }
    }
};

  