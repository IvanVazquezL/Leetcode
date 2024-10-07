var maxProfit = function(prices) {
    let cash = 0; // Maximum profit when not holding stock
    let hold = -prices[0]; // Maximum profit when holding stock
    let prevCash = 0; // Previous cash for cooldown

    for (let i = 1; i < prices.length; i++) {
        const price = prices[i];
        // Cash if we sell the stock
        const newCash = Math.max(cash, hold + price);
        // Hold if we buy stock 
        hold = Math.max(hold, prevCash - price); 
        
        prevCash = cash;
        cash = newCash;
    }
    
    return cash; 
};