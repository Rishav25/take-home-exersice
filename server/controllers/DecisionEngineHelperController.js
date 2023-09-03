// Assuming that the balanceSheet data is sorted 
// reverse chronological order

export const getPreAssessmentValue = async(data) => {
    var balanceSheet = data.balanceSheet;
    var loanAmount = data.loanAmount;
    var numberOfMonths = min(12, balanceSheet.length);
    var profitOrLoss = 0 , totalAssetValue = 0, avgAssetValue;
    for(let i=0;i<numberOfMonths;i++){
        profitOrLoss += balanceSheet[i].profitOrLoss;
        totalAssetValue += balanceSheet[i].assetsValue;
    }
    avgAssetValue = totalAssetValue/numberOfMonths;

    var preAssessmentValue = 20;
    if(profitOrLoss > 0){
        preAssessmentValue = 60;
    }
    if(avgAssetValue > loanAmount){
        preAssessmentValue = 100;
    }

    return preAssessmentValue;
}

// return the yearly profitOrLoss data
export const getYearlyProfitData = async(data) => {
    var balanceSheet = data.balanceSheet;

    var yearlyProfitData = balanceSheet.reduce(function(acc, item){
        let year = item["year"];
        if(!acc[year]){
            acc[year] = item["profitOrLoss"]
        }
        else{
            acc[year] += item["profitOrLoss"];
        }
        return acc;
    },{})

    return yearlyProfitData;
}