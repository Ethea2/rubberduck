import mongoose from "mongoose";

const Schema = mongoose.Schema

const diarySchema = new Schema({
    username: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
    date: {
        type: Date,
        default: new Date()
    },
    starred: {
        type: Boolean,
        default: false
    }
})

const Diary = mongoose.models.Diary || mongoose.model("Diary", diarySchema)
export default Diary 