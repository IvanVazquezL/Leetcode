/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b) => b[1] - a[1]);
    let unitCount = 0;

    for (const [numberOfBoxes, numberOfUnitsPerBox] of boxTypes) {
        const boxCount = Math.min(truckSize, numberOfBoxes);
        unitCount += boxCount * numberOfUnitsPerBox;
        truckSize -= boxCount;

        if (truckSize === 0) break;
    }

    return unitCount;
};