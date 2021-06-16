import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const UserInfo = mongoose.model('UserInfo', userSchema);

export default UserInfo;
