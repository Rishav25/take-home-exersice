import fetch from "node-fetch";
import dotenv from "dotenv";

import {getPreAssessmentValue, getYearlyProfitData} from "./DecisionEngineHelperController.js";

dotenv.config();

const getDecisionEngineData = async(request) => {
    try{
        await fetch(process.ENV.DECISION_ENGINE_URL, {
            method: "POST",
            body : request
        })
        .then((response) => response.json())
        .then((responseData) => {
            return responseData;
        })
    }
    catch(error){
        res.status(503).json({"message" : error.message});
    }
}

export const getDecision = async(req,res) => {
    try{
        const data = req.body();
        const preAssessmentValue = getPreAssessmentValue(data);
        const yearlyProfitData = getYearlyProfitData(data);
        const decisionEngineRequest = {
            "name" : data.name,
            "yearEstablished" : data.yearEstablished,
            "preAssessmentValue" : preAssessmentValue,
            "yearlyProfitData" : yearlyProfitData
        }
        
        //call the decision engine url using a function here
        const responseData = await getDecisionEngineData(decisionEngineRequest);

        res.send(200).json(responseData);
    }
    catch(error){
        res.status(400).json({"message" : error.message});
    }
}