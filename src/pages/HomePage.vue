<script setup>
import { blogsService } from '@/services/BlogsService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { onMounted } from 'vue';


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
  <div class="">

  </div>
</template>

<style scoped lang="scss"></style>
