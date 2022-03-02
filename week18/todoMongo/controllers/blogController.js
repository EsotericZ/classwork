const { Blog } =require('../model');

module.exports = {
    createBlog: async (req, res) => {
        const { description, userId } = req.body;
        try {
            const newBlog = await Blog.create({
                description,
                userId,
            });
            res.json(newBlog);
        } catch (e) {
            res.json(e);
        }
    },

    getAllBlogs: async (req, res) => {
        try {
            const blogs = await Blog.find().populate('userId');
            res.json(blogs);
        } catch (e) {
            res.json(e);
        }
    },

    getBlogById: async (req, res) => {
        const { blogId } = req.params;
        try {
            const blog = await Blog.findById(blogId);
            res.json(blog);
        } catch (e) {
            res.json(e);
        }
    },

    updateBlogById: async (req, res) => {
        const { blogId } = req.params;
        try {
            const updatedBlog = await Blog.findByIdAndUpdate(
                blogId,
                {...req.body},
                {
                    new: true,
                    runValidators: true,
                }
            );
            res.json(updatedBlog);
        } catch (e) {
            res.json(e)
        }
    },

    deleteBlogById: async (req, res) => {
        const { blogId } = req.params;
        try {
            const deletedBlog = await Blog.findByIdAndDelete(blogId);
            res.json(deletedBlog);
        } catch (e) {
            res.json(e)
        }
    },
}