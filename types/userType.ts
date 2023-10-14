import DiaryType from "./diaryType"

interface UserType {
    username: String,
    email: String,
    diaries: Array<DiaryType>
}

export default UserType