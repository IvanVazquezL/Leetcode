/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    const N = deck.length;
    const result = new Array(N).fill(0);
    let skip = false;
    let indexInDeck = 0;
    let indexInResult = 0;

    // Sort the deck in increasing order
    deck.sort((a, b) => a - b);

    // Loop until all cards are placed in the result array
    while (indexInDeck < N) {
        // If the current position in result array is available (empty)
        if (result[indexInResult] === 0) {

            // If we are not skipping, place a card from the deck into the result
            if (!skip) {
                result[indexInResult] = deck[indexInDeck];
                indexInDeck++;
            }

            // Toggle skip to alternate between placing and skipping
            skip = !skip;
        }
        
        // Move to the next position in the result array
        indexInResult = (indexInResult + 1) % N;
    }

    return result;
};
