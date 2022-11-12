const mongoose = require("mongoose");
const { Schema } = mongoose;

const scoreSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  gameId: {
    type: String,
    unique: true,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  }
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;
