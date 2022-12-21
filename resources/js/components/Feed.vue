

<template>
    <Form :method="getPosts"></Form>

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
        if ( !localStorage.getItem( "gatobook_username" ) ) {
            return this.$router.push( 'login' )
        }

        console.log( "entrou aqui" )
        await axios.get( '/api/posts' )
            .then( ( { data } ) => {
                this.posts = data;
                console.log( data );
            } )
    },
    methods: {
        async getPosts() {
            await axios.get( '/api/posts' )
                .then( ( { data } ) => {
                    this.posts = data;
                } );

        }
    },
    components: {
        Form,
        Post
    }
}
</script>