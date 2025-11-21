<script setup>
    useHead({
        title: 'Nuxt4 CURD'
    })
</script>

<template>
    <h1 class=" text-2xl text-center text-blue-600 font-bold my-2">We Are Learning CURD Operations</h1>
    <p>Go go post Page to Explore CURD</p>
    <NuxtLink to="/about">About</NuxtLink> <br><br>
    <NuxtLink to="posts/create" class=" bg-blue-600  text-white px-3 py-2 rounded">Create Post</NuxtLink> <br><br>
    <NuxtLink to="/posts" class="text-blue-600 underline">
      Go to Posts →
    </NuxtLink>
</template>