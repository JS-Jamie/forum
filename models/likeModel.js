import mongoose from 'mongoose';

const likeSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    requried: true,
    ref: 'User',
  },
  comment: {
    type: mongoose.Schema.Types.ObjectId,
    requried: true,
    ref: 'Comment',
  },
});

const Like = mongoose.model('Like', likeSchema);

export default Like;
