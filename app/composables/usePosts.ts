export const usePosts = () =>{
    const config = useRuntimeConfig();
    const base = config.public.baseURL;

    const loading = ref(false)
    const error = ref<string | null>(null);

    const getPosts = async (query: any = {})=>{
        loading.value = true;
        error.value = null;
        try{
            return await $fetch(`${base}/posts`,{query})
        }
        catch(err:any){
            error.value = err.message;
            return [];
        }
        finally{
            loading.value = false;
        }
    }
    const getPost = async (id: number) =>{
        loading.value = true;
        try{
            return await $fetch(`${base}/posts/${id}`)
        }
        catch(e:any){
            error.value = e.message;
            return null;
        }
        finally{
            loading.value = false
        }
    }
    const deletePost = async (id: number)=>{
        loading.value = true;

        try{
            await $fetch(`${base}/posts/${id}`,{method:'DELETE'});
            return true;
        }
        catch(e:any){
            error.value = e.message;
            return false;

        }
        finally{
            loading.value = false;
        }
    }
    const createPost = async (data: any) =>{
        loading.value = true
        try{
            return await $fetch(`${base}/posts`,{method: 'POST',body: data})
        }
        catch(e:any){
            error.value = e.message;
            return null;
        }
        finally{
            loading.value = false;
        }
    }
    const updatePost = async (id:number ,data: any )=>{
        loading.value = true;
       try{
         return await $fetch(`${base}/posts/${id}`,{
            method: 'PUT',
            body: data
        })
       }
       catch(e:any){
        error.value = e.message
        return null;
       }
       finally{
        loading.value = false
       }
        
    }

    return{
        getPosts,
        getPost,
        deletePost,
        createPost,
        updatePost
    }
}
