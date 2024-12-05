import { logger } from "@/utils/Logger.js";
import { api } from "./AxiosService.js";

class BlogsService {
    async getBlogs() {
        const response = await api.get('/api/blogs')
        logger.log('Got Blogs 💬', response.data)
    }
}

export const blogsService = new BlogsService()