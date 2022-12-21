<template>
    <div class="post-container">
        <div class="post-header">
            <img :src="'https://avatars.dicebear.com/api/open-peeps/' + post.title + '.svg'" alt="user image"
                class="user-image">
            <span>wellsousaaa</span>
        </div>

        <img :src="'https://cataas.com' + post.image" alt="post image" class="post-image">

        <div class="post-footer">
            <div class="like-container">
                <v-icon scale="1.8" name="bi-heart" />
            </div>
            <div class="share-container">
                <v-icon scale="1.8" name="bi-send" />
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
    }
}
</script>