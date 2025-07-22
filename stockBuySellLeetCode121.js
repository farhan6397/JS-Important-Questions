var maxProfit = function(prices) {
    let maxprofit = 0;
    let min = prices[0];
    for(let i=0; i<prices.length; i++){
        if(prices[i]<min){
            min = prices[i];
        }
        let profit = prices[i]-min;
        if(profit>maxprofit){
            maxprofit=profit;
        }
    }
    return maxprofit;
};

let prices = [7,1,2,4,8,6];
console.log(maxProfit(prices))