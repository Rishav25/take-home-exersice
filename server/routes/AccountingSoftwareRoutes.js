import express from "express";
import {getBalanceSheet} from "../controllers/AccountingSoftwareController.js";

const router = express.Router();

router.post("/getBalanceSheet", getBalanceSheet);

export default router;