const mongoose = require("mongoose");

const crypto = require("crypto");
const randomUuid = crypto.randomUUID();


const chatSchema = {
    default: randomUuid,
    role: {
        type: String,
        required: true,

    },
    content: {
        type: String,
        required: true,
    }
}

module.exports = mongoose.model("Chat", chatSchema);