import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
    {
        videoFile: {
            type: String, // cloudy url
            required: true
        },
        thumbnail: {
            type: String, // cloudy url
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        duration: {
            type: Number, //cloudynari video duration
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);
export default Video;