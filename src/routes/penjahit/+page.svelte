<script>
    export let data;
    console.log(data.user);
    const user = data.user;
</script>

<div class="flex justify-center w-full">
    <div class="w-[95%] max-w-6xl mt-8 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
        {#each user as item (item.id)}
            {#if item.role === 'penjahit'}
                <div class="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center w-64 mx-auto">
                    <div class="bg-gray-300 w-24 h-24 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                        <img src="https://gajahmada-taylor.pockethost.io/api/files/{item.collectionId}/{item.id}/{item.profile}" alt="Profile Picture" class="w-full h-full object-cover">
                    </div>
                    <p class="text-xl font-semibold mb-2">{item.nama}</p>
                    <p class="text-base text-green-800 font-semibold cursor-pointer">Lihat Selengkapnya >></p>
                </div>
            {/if}
        {/each}
    </div>
</div>

