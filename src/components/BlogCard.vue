<script setup>
import { Blog } from '@/models/Blog';


defineProps({
    blogProp: { type: Blog, required: true }
})

</script>

<template>
    <div class="col-7">
        <div>
            <router-link :to="{ name: 'Profile', params: { profileId: blogProp.creatorId } }">
                <img class="creator-img" :src="blogProp.creator.picture" alt="">
            </router-link>
            <h5>{{ blogProp.creator.name }}</h5>
        </div>
        <h4>
            {{ blogProp.title }}
        </h4>
        <div>
            <div v-if="blogProp.body.length < 200">
                {{ blogProp.body }}
            </div>
            <div v-else> {{ blogProp.body.substring(0, 200) + ".." }}
            </div>
        </div>
        <div>
            {{ blogProp.createdAt }}
        </div>
    </div>
    <div class="col-4">
        <img class="img-fluid cover-img" :src="blogProp.imgUrl" alt="">
    </div>
</template>

<style scoped lang="scss">
.creator-img {
    height: 3rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
}

.cover-img {
    height: 200px;
    width: 100%;
    object-fit: cover;
}
</style>