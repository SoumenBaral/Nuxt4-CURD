<script setup lang="ts">
const route = useRoute();
const router = useRouter();   // ✅ Corrected
const postApi = usePosts();
const posts = usePostsState(); // ✅ Use shared state

const id = Number(route.params.id);
const post = await postApi.getPost(id);

const form = reactive({
  title: post.title,
  body: post.body,
  userId: post.userId
});

const save = async () => {
  const updated = await postApi.updatePost(id, form);

  if (updated) {
    const index = posts.value.findIndex(p => p.id === id);
    if (index !== -1) {
      posts.value[index] = updated; // update UI
    }
  }

  alert("Updated Successfully");
  router.push("/posts");
};
</script>

<template>
  <div>
    <h1 class="text-xl font-bold mb-4 mt-4 text-center text-cyan-600">Edit Post</h1>

    <input v-model="form.title" class="border p-2 w-full mb-3" />
    <textarea v-model="form.body" class="border p-2 w-full mb-3"></textarea>

    <button class="bg-green-600 text-white px-4 py-2" @click="save">
      Save Changes
    </button>
  </div>
</template>
