import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();

router.get("/kpis", async (req, res) => {
  try {
    const kpis = await KPI.find();
    res.status(200).json(kpis); //gets sent to front end; gets KPIs objects that we've grabbed from DB sent to FE
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
