<script>
    export let form;
    const errors = form?.errors;
    const emailError = form?.emailError;
    const usernameError = form?.usernameError;
</script>

<div class="w-full p-4">
    <div class="bg-orange-200 w-max mx-auto py-2 px-4 rounded-md shadow-md">
        <h2 class="text-center font-bold">FORM DAFTAR</h2>
    </div>

    <div class="bg-orange-200 w-[50%] mx-auto py-6 px-6 rounded-xl mt-6 mb-6 shadow-md">
        <form class="grid grid-cols-12 gap-y-4 gap-x-3" method="POST">
            <!-- Nama -->
            <div class="col-span-3 font-medium text-left">Username</div>
            <div class="col-span-1 text-center">:</div>
            <div class="col-span-8">
                <input type="text" name="username" class="p-2 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-orange-400">
                {#if errors?.username}
                    <p class="text-red-400">{errors.username[0]}</p>
                {/if}
            </div>
            <div class="col-span-3 font-medium text-left">Nama</div>
            <div class="col-span-1 text-center">:</div>
            <div class="col-span-8">
                <input type="text" name="nama" class="p-2 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-orange-400">
                {#if errors?.nama}
                    <p class="text-red-400">{errors.nama[0]}</p>
                {/if}
            </div>

            <!-- Jenis Kelamin -->
            <div class="col-span-3 font-medium text-left">Jenis Kelamin</div>
            <div class="col-span-1 text-center">:</div>
            <div class="col-span-8">
                <select name="jenis_kelamin" class="p-2 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-400">
                    <option value="">Pilih</option>
                    <option value="L">Laki-laki</option>
                    <option value="P">Perempuan</option>
                </select>
                {#if errors?.jenis_kelamin}
                    <p class="text-red-400">{errors.jenis_kelamin[0]}</p>
                {/if}
            </div>

            <!-- Alamat -->
            <div class="col-span-3 font-medium text-left">Alamat</div>
            <div class="col-span-1 text-center">:</div>
            <div class="col-span-8">
                <input name="alamat" type="text" class="p-2 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-400">
                {#if errors?.alamat}
                    <p class="text-red-400">{errors.alamat[0]}</p>
                {/if}
            </div>

            <!-- Email -->
            <div class="col-span-3 font-medium text-left">Email</div>
            <div class="col-span-1 text-center">:</div>
            <div class="col-span-8">
                <input name="email" type="email" class="p-2 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-400">
                {#if errors?.email}
                    <p class="text-red-400">{errors.email[0]}</p>
                {/if}
            </div>

            <!-- Nomor Telepon -->
            <div class="col-span-3 font-medium text-left">Nomor Telepon</div>
            <div class="col-span-1 text-center">:</div>
            <div class="col-span-8">
                <input name="nomor_hp" type="text" class="p-2 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-400">
                {#if errors?.nomor_hp}
                    <p class="text-red-400">{errors.nomor_hp[0]}</p>
                {/if}
            </div>

            <!-- Password -->
            <div class="col-span-3 font-medium text-left">Password</div>
            <div class="col-span-1 text-center">:</div>
            <div class="col-span-8">
                <input name="password" type="password" class="p-2 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-400">
                {#if errors?.password}
                    <p class="text-red-400">{errors.password[0]}</p>
                {/if}
            </div>

            <!-- Konfirmasi Password -->
            <div class="col-span-3 font-medium text-left">Konfirmasi Password</div>
            <div class="col-span-1 text-center">:</div>
            <div class="col-span-8">
                <input name="config_password" type="password" class="p-2 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-400">
                {#if errors?.config_password}
                    <p class="text-red-400">{errors.config_password[0]}</p>
                {/if}
            </div>

            <!-- Submit Button -->
            <div class="col-span-12 flex justify-center mt-4">
                <button type="submit" class="bg-orange-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-500 transition duration-300">
                    Selesai
                </button>
            </div>
        </form>
    </div>
</div>
