import { Router } from "express";
import { courses, services, site, stats } from "../data/content.js";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ site, services, courses, stats });
});

router.get("/services", (_req, res) => {
  res.json(services);
});

export default router;
