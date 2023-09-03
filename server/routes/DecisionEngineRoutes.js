import express from "express";
import {getDecision} from "../controllers/DecisionEngineController.js";

const router = express.Router();

router.post("/getDecision", getDecision);

export default router;