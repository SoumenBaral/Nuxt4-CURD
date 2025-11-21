<script setup lang="ts">
const router = useRouter();     
const postApi = usePosts();

const form = reactive({        
    title: '',
    body: '',
    userId: 1
});

const posts = useState("posts",()=>[]) //For this fake db when i work with real api i don't need it 

const submit = async () => {
    await postApi.createPost(form);
    alert("Post Created Successfully");
    router.push('/posts');      
};
</script>

<template>
  <div>
    <h1 class="text-xl font-bold mb-4 text-center mt-3 text-blue-400">
      Create Post
    </h1>

    
    <input 
      v-model="form.title" 
      class="border p-2 w-full mb-3" 
      placeholder="Title"
    />

    <textarea
      v-model="form.body"            
      class="border p-2 w-full mb-3"
      placeholder="Body"
    ></textarea>

    <button class="bg-blue-600 text-white px-4 py-2" @click="submit">
      Save
    </button>
  </div>
</template>
