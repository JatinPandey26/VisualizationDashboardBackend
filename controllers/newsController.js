import fs from "fs";
import { News } from "../models/News.js";
import { getHashMap } from "../utils/methods.js";


// api created to write to DB 
export async function writeToDatabase() {
  const data = JSON.parse(fs.readFileSync("./jsondata.json"));

  for (let news of data) {
    await News.create(news);
  }
}

export async function getAllNews(req, res, next) {
  const news = await News.find();

  res.send({
    success: true,
    data: news,
  });
}

export async function getChartDataController(req, res, next) {
  const topic = req.query.topic || "";
  const region = req.query.region || "";
  const sector = req.query.sector || "";
  const source = req.query.source || "";
  const country = req.query.country || "";
  const pestle = req.query.pestle || "";
  const end_year = Number(req.query.end_year) || "";

  const news = await News.find({
    topic: { $regex: topic, $options: "i" },
    region: { $regex: region, $options: "i" },
    sector: { $regex: sector, $options: "i" },
    source: { $regex: source, $options: "i" },
    country: { $regex: country, $options: "i" },
    pestle: { $regex: pestle, $options: "i" },
    end_year: end_year,
  });

  const intensityData = await getHashMap(news, "intensity");
  const likelihoodData = await getHashMap(news, "likelihood");
  const relevanceData = await getHashMap(news, "relevance");
  const yearData = await getHashMap(news, "start_year");
  const countryData = await getHashMap(news, "country");
  const topicsData = await getHashMap(news, "topic");
  const regionData = await getHashMap(news, "region");

  res.send({
    success: true,
    intensity: intensityData,
    likelihood: likelihoodData,
    relevance: relevanceData,
    year: yearData,
    country: countryData,
    topics: topicsData,
    region: regionData,
  });
}
