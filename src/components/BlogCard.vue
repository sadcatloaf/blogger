<script setup>
import { Blog } from '@/models/Blog';


defineProps({
    blogProp: { type: Blog, required: true }
})

</script>

<template>
    <div class="col-7">
        <div>
            <img class="creator-img" :src="blogProp.creator.picture" alt="">
            <h5>{{ blogProp.creator.name }}</h5>
        </div>
        <h4>
            {{ blogProp.title }}
        </h4>
        <p>
            {{ blogProp.body }}
        </p>
    </div>
    <div class="col-4">
        <img :src="blogProp.imgUrl" alt="">
    </div>
</template>

<style scoped lang="scss">
.creator-img {
    height: 3rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
}
</style>