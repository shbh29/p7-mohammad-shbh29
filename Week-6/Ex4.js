//Buy Sell Stock Problem

function getMaxProfit(stockPrices) {
    let maxProfit = 0;
    let minIndex = 0;
    for(let i = 1; i < stockPrices.length; i++) {
        if(stockPrices[minIndex] >= stockPrices[i]) {
            minIndex = i;
        } else {
            let currentProfit = stockPrices[i] - stockPrices[minIndex];
            if (i > minIndex && currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }
        }
    }
    return maxProfit;
}

let stockPrices = [7,1,3,4,0,6,4,2];
// stockPrices = [7,6,5,3,2,1];
console.log(`Max Profit you can get is: ${getMaxProfit(stockPrices)}`);