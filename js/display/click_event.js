
function makeSelection() {
    replaceUserCards();
    userCardSelection.clear();
    let multiplier = evaluate();
    console.log(multiplier);
    displayButton(CONTINUE_GAME);
    hideButton(MAKE_SELECTION);
}

function imageClickEvent(id) {
    let ms = document.getElementById(MAKE_SELECTION);
    if (ms.style.display == 'none') {
        return;
    }

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

