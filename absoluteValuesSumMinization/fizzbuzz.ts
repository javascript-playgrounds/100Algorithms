
type FizzBuzzResult = string | number;

/**
 * Defines the function signature for a rule.
 * @typedef {(n: number) => string} Rule
 */
type Rule = (n: number) => string;

/**
 * A game of FizzBuzz.
 */
class FizzBuzz implements IterableIterator<FizzBuzzResult>
{
    /**
     * Creates a game of FizzBuzz.
     * @param {Iterator<number>} sequence The sequence of numbers to play the game over.
     * @param {Rule[]} rules The rules to use for the game.
     */
    constructor(
        private sequence: Iterator<number>,
        private rules: Rule[]
    ) { }

    /**
     * Produces the next result in the game.
     * @returns {IteratorResult<FizzBuzzResult>} The next value and done state of the game.
     */
    public next(): IteratorResult<FizzBuzzResult> {
        let seq = this.sequence.next();

        if (seq.done) {
            return { done: true, value: "" };
        }

        return { done: false, value: this.ApplyRules(seq.value) }
    }

    /**
     * Provides the iterator interface for the game.
     */
    public [Symbol.iterator](): IterableIterator<FizzBuzzResult> {
        return this;
    }

    /**
     * Applies the game rules to a given number.
     * @param {number} n The number to apply the rules of the game to.
     * @returns {FizzBuzzResult} The result for this number.
     */
    public ApplyRules(n: number): FizzBuzzResult {
        let result = this.rules
            .map(r => r(n))
            .reduce((p, c) => p + c);

        return result.length == 0 ? n : result;
    }
}

// Get a number sequence from 1 to 100 inclusive.
let sequence = (new Array(101)).keys();
sequence.next();

// Create a set of FizzBuzz game rules.
let fb = new FizzBuzz(sequence, [
    i => i%3 == 0 ? "Fizz" : "",
    i => i%5 == 0 ? "Buzz" : ""
]);

// Play the game of FizzBuzz.
let round: IteratorResult<FizzBuzzResult>;

while (round = fb.next(), !round.done) {
    console.log(round.value);
}
// one liner fizz buzz:
function fizzbuzz( i ) {
    return [ [ 'fizz' ][i%3], [ 'buzz' ][i%5] ].join( '' ) || i;
  }

    
    
//     if(a % 3 == 0 && a % 5 == 0){
//         console.log( 'fizzbuzz');
//         a-1;
//     }
//     if(a % 5 == 0){
//         console.log('buzz', a)
//         a-1;
//     }
//     else{
//         console.log('fizz');
//     }
    
// }
