import mongoose from 'mongoose';

const commentSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      requried: true,
      ref: 'User',
    },
    userId: {
      type: String,
      required: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Post',
    },
    postId: {
      type: String,
      required: true,
    },
    parent: {},
    children: [],
    parentId: { type: String },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
