class TokenBucket {
    constructor(size, refillRatePerMinute) {
        this.size = size; // Max number of tokens in the bucket
        this.refillRatePerMinute = refillRatePerMinute; // Tokens added per minute
        this.tokens = size; // Start with a full bucket
    }

    processRequest() {
        if (this.tokens > 0) {
            this.tokens--; // Consume one token
            console.log('200'); // Request accepted
        } else {
            console.log('429'); // Too Many Requests
        }
    }

    refillTokens(time) {
        // Refill tokens exactly when the current time is a multiple of 60 (start of each minute)
        if (time % 60 === 0) {
            this.tokens = this.refillRatePerMinute; // Reset the tokens to refill rate or capacity
        }
    }
}

function main() {
    const tb = new TokenBucket(4, 4); // Max 4 tokens, refill 4 tokens per minute
    const requestArrival = [0, 5, 5, 5, 20, 59, 60]; // Example request times

    for (let i = 0; i < 150; i++) {
        console.log(`time: ${i}`);

        // Refill tokens every new minute (when i % 60 === 0)
        tb.refillTokens(i);

        // Process requests arriving at the current time
        while (requestArrival[0] === i) {
            tb.processRequest();
            requestArrival.shift(); // Remove the processed request time
        }
    }
}

main();
