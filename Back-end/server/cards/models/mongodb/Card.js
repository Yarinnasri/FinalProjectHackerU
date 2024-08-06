const mongoose = require("mongoose");
const Image = require("./Image");
const { DEFAULT_VALIDATION, URL } = require("../../helpers/mongooseValidators");

const cardSchema = new mongoose.Schema({
  dishTitle: DEFAULT_VALIDATION,
  cuisine: DEFAULT_VALIDATION,
  author: DEFAULT_VALIDATION,
  description: {
    type: String,
    minLength: 2,
    maxLength: 2560,
    trim: true,
    lowercase: true,
    required: false,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
    required: true,
    trim: true,
  },
  overallTime: {
    type: String,
    minLength: 2,
    maxLength: 10,
    trim: true,
    required: true,
  },
  tags: {
    type: [String],
    minLength: 2,
    maxLength: 256,
    trim: true,
    lowercase: true,
    required: true,
  },
  instructions: {
    type: [String],
    maxLength: 1024,
    trim: true,
    lowercase: true,
    required: true,
  },
  web: URL,
  image: Image,
  bizNumber: {
    type: Number,
    minLength: 7,
    maxLength: 7,
    required: true,
    trim: true,
  },
  likes: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Card = mongoose.model("card", cardSchema);

module.exports = Card;
