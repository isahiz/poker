// the css class of a card cell (td element)
const CARD_CELL_CLASS = "card_cell";
const CARD_ROW_ID = "card_row";

IMG_VALUE_REG = /([23456789AJKQ]|(10))[CDHS]/;

function initTable() {
    let row = document.createElement("tr");
    row.id = CARD_ROW_ID;
    let card_table = document.getElementById("cards");
    card_table.appendChild(row);
    for (let i = 0; i < 5; i++) {
        let card = window.deck.dealOne();
        let cardCell = document.createElement("td");
        cardCell.id = i.toString();
        cardCell.className = CARD_CELL_CLASS;
        row.appendChild(cardCell);
        insertCardImage(cardCell.id, card.imageLink());
    }
}

/**
 * Inserts an image into a table cell
 * @param {String} id the id of the table cell to insert the image
 * @param {String} imgLink the link to the image
 */
function insertCardImage(id, imgLink) {
    let img = document.createElement("img");
    img.src = imgLink;
    img.onclick = function() {imageClickEvent(id)};
    document.getElementById(id).appendChild(img);
    // currentCardStrings.set(id, getImageValuesById(id));
}

function setSelectedCardCellBorder(id) {
    let cell = document.getElementById(id);
    if (cell.hasAttribute("style")) {
        cell.removeAttribute("style");
    }
    cell.style.border = "2px solid red";
    cell.style.borderRadius = "25px";
}

function resetCardCellBorder(id) {
    let cell = document.getElementById(id);
    if (cell != null && cell.hasAttribute("style")) {
        cell.removeAttribute("style");
    }
}

function replaceCard(id, newCard) {
    let cell = document.getElementById(id);
    cell.removeChild(cell.childNodes[0]);
    insertCardImage(id, newCard.imageLink());
}

function getCardCodeValueOfCellObject(td) {
    console.log(td.childNodes[0].src.match(IMG_VALUE_REG)[0]);
    return td.childNodes[0].src.match(IMG_VALUE_REG)[0];
}