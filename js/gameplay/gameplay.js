userCardSelection = new Map();

function replaceUserCards() {
    for (let i = 0; i < 5; i++) {
        let key = i.toString();
        if (!userCardSelection.has(key)) {
            let newCard = window.deck.dealOne();
            replaceCard(key, newCard);
            userCardSelection.delete(key);
        }
        resetCardCellBorder(key);
    }
}