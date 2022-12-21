

<template>
    <Form></Form>

    <Post v-for="post in posts" :key="post.id" :post="post" />
</template>

<script>
import Form from './common/Form'
import Post from './common/Post'
export default {
    name: 'Feed',
    data() {
        return {
            posts: []
        }
    },
    async created() {
        await axios.get( '/api/posts' )
            .then( ( { data } ) => {
                this.posts = data;
                console.log( data );
            } )
    },
    components: {
        Form,
        Post
    }
}
</script>