<template>
    <div class="post-container" v-vue-aos.once="{ animationClass: 'fade-right' }">
        <div class="post-header">
            <img :src="'https://avatars.dicebear.com/api/open-peeps/' + post.username + '.svg'" alt="user image"
                class="user-image">
            <span>{{ post.username }}</span>
        </div>

        <div class="image-post"><img loading="lazy" :src="'https://cataas.com' + post.image" alt="post image"
                class="post-image"></div>

        <div class="post-footer">
            <div class="like-container">
                <v-icon scale="1.7" name="bi-heart" />
            </div>
            <div @click="share" class="share-container">
                <v-icon scale="1.7" name="bi-send" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Post",
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        share() {
            if ( navigator.share ) {
                navigator.share( {
                    title: 'Gatobook',
                    text: 'Venha ver esse post no Gatobook!',
                    url: window.location.href,
                } )
                    .then( () => console.log( 'Successful share' ) )
                    .catch( ( error ) => console.log( 'Error sharing', error ) );
            }
        }
    }
}
</script>