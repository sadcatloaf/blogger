import { logger } from "@/utils/Logger.js";
import { api } from "./AxiosService.js";
import { Blog } from "@/models/Blog.js";
import { AppState } from "@/AppState.js";

class BlogsService {
    async getBlogsByCreatorId(profileId) {
        const response = await api.get(`api/blogs?creatorId=${profileId}`)
        logger.log('Got Blogs by Creator ID', response.data)
        const blogs = response.data.map(blogPOJO => new Blog(blogPOJO))
        AppState.blogs = blogs
    }
    async getBlogs() {
        const response = await api.get('/api/blogs')
        logger.log('Got Blogs 💬', response.data)
        const blogs = response.data.map(blogPOJO => new Blog(blogPOJO))
        AppState.blogs = blogs
    }
}

export const blogsService = new BlogsService()