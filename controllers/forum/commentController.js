const Comment = require('../../models/forum/Comment');

// Tạo comment mới
const createNewComment = async (req, res) => {
    try {
        const { postId } = req.params;
        const { content, authorId, avatar, name, datetime } = req.body;
        const newComment = new Comment({
            content: content,
            authorId: authorId,
            avatar: avatar,
            name: name,
            datetime: datetime,
            postId: postId
        });

        const savedComment = await newComment.save();
        res.status(201).json(savedComment);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating post' });
    }
};

// Lấy tất cả comment cho từng post
const getCommentsForPost = async (req, res) => {
    const { postId } = req.params;

    try {
        const comments = await Comment.find({ postId });
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Xoá comment
const deleteComment = async (req, res) => {
    try {
        const { commentId } = req.body;

        if (!commentId) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        const deletedComment = await Comment.findByIdAndDelete(commentId);

        if (!deletedComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        res.status(200).json({ message: 'Comment delete success' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error delete comment' });
    }
};


module.exports = {
    createNewComment,
    deleteComment,
    getCommentsForPost
}