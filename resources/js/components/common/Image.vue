<template>
    <div class="post-image">
        <vue-load-image>
            <template v-slot:image>
                <img :src="src" />
            </template>
            <template v-slot:preloader>
                <img src="https://media.tenor.com/wXTO9bFFJXMAAAAM/loading-slow-internet.gif" />
            </template>
            <template v-slot:error>Image load fails</template>
        </vue-load-image>
    </div>
</template>

<script>
import VueLoadImage from 'vue-load-image'

export default {
    components: {
        'vue-load-image': VueLoadImage
    },
    props: {
        src: {
            type: String,
            required: true
        }
    }
}
</script>