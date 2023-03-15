import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  comments: [],
});

const Post = mongoose.model('Post', postSchema);

export default Post;
