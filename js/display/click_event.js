
function makeSelection() {
    replaceUserCards();
    userCardSelection.clear();
    evaluate();
}

function imageClickEvent(id) {
    if (userCardSelection.has(id)) {
        resetCardCellBorder(id);
        userCardSelection.delete(id);
        return;
    }

    setSelectedCardCellBorder(id);

    userCardSelection.set(id, getImageValuesById(id));
}

function getImageValuesById(id) {
    let fullLink = document.getElementById(id).childNodes[0].getAttributeNode("src").value;
    return fullLink.match(IMG_VALUE_REG)[0];
}

