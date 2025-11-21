<script setup>
    const route = useRoute();
    const params = Number(route.params.id);
    const postApi =  usePosts();
    const post = await  postApi.getPost(params)
</script>

<template>
    <div class=" border p-4 border-amber-200 bg-amber-50 rounded-2xl m-4 shadow-xl">
            <h2 ><strong class=" font-bold">Post Title :</strong>  {{ post.id }} . {{ post.title }}</h2>
            <p> <strong class=" font-bold">Description :</strong> {{ post.body }}</p>
            <NuxtLink :to="`/posts`" class="text-blue-600 mr-3">All Post</NuxtLink>
        </div>
</template>