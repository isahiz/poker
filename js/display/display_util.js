// the css class of a card cell (td element)
const CARD_CELL_CLASS = "card_cell";

function initTable() {
    let cardTable = document.getElementById("cards");
    let row = document.createElement("tr");
    cardTable.appendChild(row);
    for (let i = 0; i < 5; i++) {
        let card = window.deck.dealOne();
        let cardCell = document.createElement("td");
        cardCell.id = i.toString();
        cardCell.className = CARD_CELL_CLASS;
        row.appendChild(cardCell);
        insertCardImage(cardCell.id, card.image_link());
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
