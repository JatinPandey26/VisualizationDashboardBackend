import mongoose from "mongoose";

const schema = new mongoose.Schema({
  date: {
    type: String,
  },
  intensity: {
    type: Number,
  },
  sector: {
    type: String,
  },
  topic: {
    type: String,
  },
  insight: {
    type: String,
  },
  url: {
    type: String,
  },
  impact: {
    type: String,
  },
  region: {
    type: String,
  },
  start_year: {
    type: Number,
  },
  end_year: {
    type: Number,
  },
  added: {
    type: String,
  },
  published: {
    type: String,
  },
  country: {
    type: String,
  },
  pestle: {
    type: String,
  },
  title: {
    type: String,
  },
  likelihood: {
    type: Number,
  },
  relevance: {
    type: Number,
  },
});

export const News = mongoose.model("News", schema);
