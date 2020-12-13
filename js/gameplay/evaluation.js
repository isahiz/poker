const MATCHES = {
    RS_FLUSH: 200,
    FIVE: 50,
    STRAIGHT_FLUSH: 20,
    FOUR: 15,
    FULL_HOUSE: 5,
    FLUSH: 4,
    STRAIGHT: 3,
    THREE: 1,
    TWO_PAIR: 1
}

function evaluate() {
    let cards = document.getElementById(CARD_ROW_ID).childNodes;
    if (isFlush(cards)) {
        return MATCHES.FLUSH;
    }
}

function isTwoPairs(cards) {
    let found = new Set();
    for (let i = 0; i < cards.length; i++) {
        let num = getCardCodeValueOfCellObject(cards[i])[0];
        if (!found.has(num)) {

        } else {

        }
    }
}

function isFlush(cards) {
    let first = getCardCodeValueOfCellObject(cards[0])[1];
    for (let i = 1; i < cards.length; i++) {
        let code = getCardCodeValueOfCellObject(cards[i]);
        if(code[1] != first) {
            console.log("not flush");
            return false;
        }
    }
    console.log("flush");
    return true;
}
