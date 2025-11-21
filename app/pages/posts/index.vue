
<script setup lang="ts">
    const postApi = usePosts();
    const posts = ref(await postApi.getPosts());
    console.log(posts);
    
    const remove = async (id:number) =>{
        if(!confirm('Delete this post?'))return;
        const success =  await postApi.deletePost(id);
        if(success){
            
            posts.value = posts.value.filter((p) => p.id !== id);
            // alert("Post Deleted form Ui only ");
        }
        else{
            alert("Delete Failed")
        }
    }
    
</script>

<template>
    <h1 class="mt-8 text-center text-2xl text-blue-600 font-bold">All Posts</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(post,index) in posts" :key="index" class=" border p-4 border-amber-200 bg-amber-50 rounded-2xl m-4 shadow-xl">
            <h2 ><strong class=" font-bold">Post Title :</strong>  {{ post.id }} . {{ post.title }}</h2>
            <p> <strong class=" font-bold mb-6">Description :</strong> {{ post.body }}</p><br>
            <NuxtLink :to="`/posts/${post.id}`" class="text-white   bg-orange-600 font-bold p-2 shadow pointer-coarse: rounded-2xl  ">Post Details</NuxtLink>
            <button class=" text-xl mx-2 bg-red-600 px-2 text-white rounded-full" @click="remove(post.id)">X</button>
        </div>
    </div>
</template>