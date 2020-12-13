Card.SUITS = ['C', 'D', 'H', 'S'];

Card.NUMS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function Card(num, suit, img) {
    let card = this;
    card.num = num;
    card.suit = suit;
    card.link = img;

    card.imageLink = function() {
        return card.link;
    };

    return card;
}

export default Card;