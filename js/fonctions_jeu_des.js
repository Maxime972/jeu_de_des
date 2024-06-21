// id des images des 6 faces du dés
var dices = ["one", "two", "three", "four", "five", "six"];

var visibleId = null;

/**
 * Affiche le numéro du dé
 *
 * @param {number} dice numéro du dé
 */
function showDice(dice) {
  if (visibleId !== dice) {
    visibleId = dice;

    console.log("visible = " + visibleId);
  }
}

/**
 * Cache les faces du dé non tiré
 */
function hide() {
  var div, i, dice;

  for (i = 0; i < dices.length; i++) {
    dice = dices[i];
    div = document.getElementById(dice);

    if (visibleId === dice) {
      div.style.display = "inline-grid";
    } else {
      div.style.display = "none";
    }
  }
}

/**
 * Affiche une div
 *
 * @param {String} id
 */
function affiDiv(id) {
  var node = document.getElementById(id);
  node.style.display = "flex";
}

/**
 * Enlève l'affichage d'une div
 *
 * @param {String} id
 */
function supAffiDiv(id) {
  var node = document.getElementById(id);
  node.style.display = "none";
}

/**
 * Désactive les boutons du jeu
 *
 * @param {String} id
 */
function desactiver(id) {
  var node = document.getElementById(id);
  var attribut = document.createAttribute("disabled");
  attribut.value = "disabled";
  node.setAttributeNode(attribut);
  //console.log(node.getAttribute("disabled"));
}

/**
 * Active les boutons du jeu
 *
 * @param {String} id
 */
function activer(id) {
  var node = document.getElementById(id);
  node.removeAttribute("disabled");
  //console.log(node.getAttribute("disabled"));
}

/**
 * Change la couleur du cercle en greenyellow
 *
 * @param {String} id
 */
function affiCercle(id) {
  var node = document.getElementById(id);
  node.style.backgroundColor = "greenyellow";
}

/**
 * Change la couleur du cercle en white
 *
 * @param {String} id
 */
function suppCercle(id) {
  var node = document.getElementById(id);
  node.style.backgroundColor = "white";
}

export {
  showDice,
  hide,
  affiDiv,
  supAffiDiv,
  desactiver,
  activer,
  affiCercle,
  suppCercle,
};
