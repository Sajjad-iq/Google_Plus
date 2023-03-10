const mongoose = require("mongoose");

const CommentRePlay = new mongoose.Schema({
    CommentRePlayerBody: String,
    CommentRePlayOwnerName: String,
    CommentRePlayOwnerId: String,
    CommentsRePlayLikes: {
        default: [],
        type: Array
    }
}
    , { timestamps: true }

)

const Comments = new mongoose.Schema({
    CommentBody: String,
    CommentOwnerName: String,
    CommentOwnerId: String,
    CommentOwnerImage: {
        default: "",
        type: String
    },
    CommentsLikes: {
        default: [],
        type: Array
    },
    CommentsRePlays: CommentRePlay
},
    { timestamps: true }

)

const AddPostSchema = new mongoose.Schema({
    PostBody: {
        type: String,
        default: ""
    },
    PostOwnerName: {
        type: String,
        default: ""
    },
    PostOwnerImage: {
        type: String,
        default: ""
    },
    PostOwnerId: {
        type: String,
        default: ""
    },
    PostImage: {
        type: String,
        default: ""
    },
    Likes: {
        type: Array,
        default: []
    },
    Comments: {
        type: [Comments],
        default: []
    }
},
    { timestamps: true }

)

module.exports = mongoose.model("Posts", AddPostSchema)
