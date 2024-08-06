
var RecentCounter = function() {
    this.requests = [];
    this.timeframe = 3000;
};

RecentCounter.prototype.ping = function(t) {
    this.requests.push(t);

    while (this.requests[0] < t - this.timeframe) {
        this.requests.shift();
    }

    return this.requests.length;    
};

function main() {
    const recentCounter = new RecentCounter();
    console.log(recentCounter.ping(1));     
    console.log(recentCounter.ping(100));   
    console.log(recentCounter.ping(3001));  
    console.log(recentCounter.ping(3002));
}

main();
