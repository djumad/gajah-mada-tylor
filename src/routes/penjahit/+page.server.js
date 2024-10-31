import pb from "$lib/pb";

export async function load() {
    const user = await pb.collection('users').getFullList();
    console.log(user);
    return {user};
};