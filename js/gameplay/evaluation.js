function evaluate() {
    let cards = document.getElementById(CARD_ROW_ID).childNodes;
    isFlush(cards);
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
