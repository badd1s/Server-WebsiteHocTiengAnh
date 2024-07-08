
const HomePost = require('../../models/forum/HomePost');
const Comment = require('../../models/forum/Comment');

// Lấy tất cả các post
const getHomePost = async (req, res) => {
    try {
        const data = await HomePost.find();
        if (!data) return res.status(204).json({ 'message': 'No Post found' })
        res.json(data);
    } catch (err) {
        console.log(err);
    }
};

// Tạo post mới
const createNewPost = async (req, res) => {
    const { title, datetime, body, authorId, authorName, authorAvatar } = req.body;
    const newPost = new HomePost({ title: title, datetime: datetime, body: body, authorId: authorId, authorName: authorName, authorAvatar: authorAvatar });

    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Xoá
const deletePostAndComments = async (req, res) => {
    const postId = req.params.id;

    try {
        const deletedPost = await HomePost.findByIdAndDelete(postId);

        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }

        const deleteComments = await Comment.deleteMany({ postId });

        if (!deleteComments) {
            return res.status(404).json({ message: 'Comments not found' });
        }

        res.json({ message: 'Post and associated comments deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting post and comments' });
    }
};

// Cập nhật
const updatePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const updatedPost = await HomePost.findByIdAndUpdate(postId, {
            title: req.body.title,
            body: req.body.body
        }, { new: true });

        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.json(updatedPost);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating post' });
    }
};

module.exports = {
    getHomePost,
    createNewPost,
    updatePost,
    deletePostAndComments
}