<script setup>
import { AppState } from '@/AppState';
import BlogCard from '@/components/BlogCard.vue';
import { blogsService } from '@/services/BlogsService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed, onMounted } from 'vue';

const blogs = computed(() => AppState.blogs)

onMounted(() => {
  getBlogs()
})

async function getBlogs() {
  try {
    await blogsService.getBlogs()
  }
  catch (error) {
    Pop.meow(error);
    logger.error('[Getting Blogs 💬]', error)
  }
}

</script>

<template>
  <div class="container">
    <div v-for="blog in blogs" :key="blog.id" class="row p-3 my-3 border border-dark rounded shadow">
      <BlogCard :blogProp="blog" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
