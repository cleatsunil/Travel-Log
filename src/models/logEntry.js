const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const logEntrySchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    comments: String,
    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },
    longitude: {
      type: Number,
      min: -90,
      max: 90,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
      min: -180,
      max: 180,
    },
    image: String,
    visitedOn: {
      type: Date,
      requried: true,
    },
  },
  {
    timestamps: true,
  }
);
const LogEntry = mongoose.model("LogEntry", logEntrySchema);
module.exports = LogEntry;
