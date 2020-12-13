import Card from "./card.js";

const IMG_DIR = "./img";

const IMG_TYPE = ".png";

function Deck() {
    let deck = [];

    deck.create = function() {
        deck.splice(0, deck.length); // clears this
        for (let i = 0; i < Card.SUITS.length; i++) {
            let suit = Card.SUITS[i];
            for (let j = 0; j < Card.NUMS.length; j++) {
                let n = Card.NUMS[j];
                let link = IMG_DIR + "/" + n + suit + IMG_TYPE;
                if (n == 'A' && suit == 'D') {
                    link = IMG_DIR + "/x" + n + suit + IMG_TYPE;
                } // this is a stupid fix idrk what to do about this yet
                // since the card is just AD, ad blockers will prevent it from loading
                // but renaming all the cards to match a different scheme is too much work
                let c = new Card(suit, n, link);
                deck.push(c);
            }
        }

        deck = shuffle(deck);
    }

    deck.dealOne = function() {
        return deck.splice(0,1)[0];
    };

    deck.create();

    return deck;
}

function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

export default Deck;