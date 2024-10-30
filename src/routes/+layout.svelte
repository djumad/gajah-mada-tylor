<script>
    import "../app.css";
</script>

<svelte:head>
    <title>Gajah Mada Tylor</title>
</svelte:head>

<div class="bg-green-300 min-h-screen text-gray-800">
    <nav class="bg-green-400 text-gray-700 border border-green-500 w-[95%] mx-auto rounded-l-full rounded-r-full p-4 shadow-lg transition duration-300 hover:shadow-xl mt-1.5 sticky top-0 z-50">
        <div class="flex justify-between items-center">
            <!-- Logo -->
            <div class="text-2xl font-bold ml-3">
                <a href="/" class="hover:text-green-900 transition duration-200">Gajah Mada Tylor</a>
            </div>
            <!-- Menu Items -->
            <ul class="flex space-x-6">
                <li><a href="/" class="hover:text-green-900 transition duration-200">Beranda</a></li>
                <li><a href="/penjahit" class="hover:text-green-900 transition duration-200">Informasi Penjahit</a></li>
                <li><a href="/daftar" class="hover:text-green-900 transition duration-200">Daftar</a></li>
                <li><a href="/login" class="hover:text-green-900 transition duration-200">Login</a></li>
            </ul>
        </div>
    </nav>

    <!-- Slot for page content -->
    <slot />
</div>
