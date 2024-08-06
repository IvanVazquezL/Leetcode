var MovingAverage = function(size) {
    this.integers = [];
    this.windowSize = size;
};

MovingAverage.prototype.next = function(val) {
    this.integers.push(val);

    while (this.integers.length > this.windowSize) {
        this.integers.shift();
    }

    const sum = this.integers.reduce((acc, curr) => acc + curr, 0);

    return sum / this.integers.length;
};

function main() {
    const movingAverage = new MovingAverage(3);
    console.log(movingAverage.next(1));
    console.log(movingAverage.next(10));
    console.log(movingAverage.next(3));
    console.log(movingAverage.next(5));
}

main();