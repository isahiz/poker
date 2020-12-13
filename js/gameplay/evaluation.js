const EQUIV = {
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 1
}

const MULTIPLIERS = {
    STRAIGHT: 3,
    FLUSH: 4,
    SF: 20,
    FOUR: 10
}

function evaluate() {
    let cards = document.getElementById(CARD_ROW_ID).childNodes;

    let flush = isFlush(cards);
    let straight = isStraight(cards);
    let four = fourOfKind(cards);

    if (flush && straight) {
        return MULTIPLIERS.SF;
    } else if (flush) {
        return MULTIPLIERS.FLUSH;
    } else if (straight) {
        return MULTIPLIERS.STRAIGHT;
    } else if (four) {
        return MULTIPLIERS.FOUR;
    }

    return 0;
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

function isStraight(cards) {
    let numArr = convertToSortedNumArray(cards);
    console.log(numArr);
    let lastNum = numArr[0];
    for (let i = 1; i < numArr.length; i++) {
        if (numArr[i] != ++lastNum) {
            return false;
        }
    }
    return true;
}

function convertToSortedNumArray(cards) {
    let arr = [];
    for (let i = 0; i < cards.length; i++) {
        let num = 0;
        let cardCode = getCardCodeValueOfCellObject(cards[i]);
        let matches = cardCode.match(/[0-9]{1,2}/);
        if (matches != null) {
            num = parseInt(matches[0]);
        } else {
            num = EQUIV[cardCode[0]];
        }
        arr[i] = num;
    }
    return arr.sort(function(a, b){return a - b});
}

function fourOfKind(cards) {
    let numArr = convertToSortedNumArray(cards);
    let first = numArr[0];
    for (let i = 1; i < numArr.length; i++) {
        if (numArr[i] != first && i > 1) {
            return false;
        }
        first = numArr[i];
    }
    return true;
}

function threeOfKind(cards) {
    let numArr = convertToSortedNumArray(cards);
    let first = numArr[0];
    for (let i = 1; i < cards.length; i++) {
        if (numArr[i] != first && i > 2) {
            return false;
        }
        first = numArr[i];
    }
    return true;
}
