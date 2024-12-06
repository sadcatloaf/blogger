<script setup>
import { AppState } from '@/AppState';
import { blogsService } from '@/services/BlogsService';
import { profileService } from '@/services/ProfileService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import BlogCard from '@/components/BlogCard.vue';
import AccountModal from '@/components/AccountModal.vue';

const profile = computed(() => AppState.activeProfile)
const blogs = computed(() => AppState.blogs)
const account = computed(() => AppState.account)

const route = useRoute()

onMounted(() => {
    getProfileById()
    getBlogsByCreatorId()
})

async function getProfileById() {
    try {
        const profileId = route.params.profileId
        await profileService.getProfileById(profileId)
    }
    catch (error) {
        Pop.meow(error);
        logger.error('[Getting Profile by ID]', error)
    }


}
async function getBlogsByCreatorId() {
    try {
        const profileId = route.params.profileId
        await blogsService.getBlogsByCreatorId(profileId)
    }
    catch (error) {
        Pop.meow(error);
        logger.error('Getting Blogs by Creator Id', error)
    }

}
</script>

<template>
    <div v-if="profile" class="container">
        <div class="row mt-5">
            <div class="col-4">
                <img class="creator-img" :src="profile.picture" alt="">
            </div>
            <div class="col-7">
                <h2>{{ profile.name }}</h2>
                <button class="btn btn-warning" type="button" data-bs-toggle="modal" data-bs-target="#AccountModal">Edit
                    Profile</button>
            </div>
        </div>
        <div v-for="blog in blogs" :key="blog.id" class="row  p-3 my-3 border border-dark rounded shadow">
            <BlogCard :blog-prop="blog" />
        </div>
    </div>
    <AccountModal v-if="account" />
</template>

<style scoped lang="scss">
.creator-img {
    height: 12rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
}
</style>
