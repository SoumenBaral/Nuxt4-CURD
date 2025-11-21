<script setup lang="ts">
const router = useRouter();
const postApi = usePosts();

const form = reactive({
  title: "",
  body: "",
  userId: 1
});

const posts = useState("posts"); 

const submit = async () => {
  const newPost = await postApi.createPost(form);

  if (!newPost?.id) {
    alert("Failed to create post");
    return;
  }

  posts.value.push({
    id: newPost.id,
    title: form.title,
    body: form.body,
    userId: 1
  });

  alert("Post Created Successfully");
  router.push("/posts");
  form.title = '';
  form.body =''
};
</script>

<template>
  <div>
    <h1 class="text-xl font-bold mb-4 text-center mt-3 text-blue-400">
      Create Post
    </h1>

    <input v-model="form.title" class="border p-2 w-full mb-3" placeholder="Title" />

    <textarea v-model="form.body" class="border p-2 w-full mb-3" placeholder="Body"></textarea>

    <button class="bg-blue-600 text-white px-4 py-2" @click="submit">
      Save
    </button>
  </div>
</template>
