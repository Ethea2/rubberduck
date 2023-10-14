import mongoose from "mongoose"

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    diaries: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Diary'
    }],
}, {timestamps: true})

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User