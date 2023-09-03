import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const getAccountingSoftwareData = async(request) => {
    try{
        await fetch(process.ENV.ACCOUNTING_SOFTWARE_URL, {
            method: "POST",
            body : request
        })
        .then((response) => response.json())
        .then((responseData) => {
            return responseData;
        })
    }
    catch(error){
        return error;
    }
}
export const getBalanceSheet = async(req,res) => {
    try{
        const data = req.body;
        const reqForAccountingSoftware = {
            "name" : data.name,
            "regId" : data.regId,
            "accountingSoftware" : data.accountingSoftware,
            "email" : data.email
        }
        
        const responseData = await getAccountingSoftwareData(reqForAccountingSoftware);
        res.status(200).json(responseData);
    }
    catch(error){
        res.status(400).json({"message" : error.message});
    }
}