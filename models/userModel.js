import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  id: { type: String },
  name: { type: String },
  comments: [],
});

const User = mongoose.model('User', userSchema);

export default User;
