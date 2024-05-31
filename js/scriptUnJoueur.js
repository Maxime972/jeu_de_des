// Valeur current à zéro
document.getElementById("scoreRound").innerHTML = 0;
//console.log(document.getElementById("scoreRound").textContent);

// Valeur globale à zéro
document.getElementById("globaleScore").innerHTML = 0;

// id des images des 6 faces du dés
var dices = ["one", "two", "three", "four", "five", "six"];

var visibleId = null;

// La fonction permet d'afficher le dés
function showDice(dice) {
  if (visibleId !== dice) {
    visibleId = dice;

    console.log("visible = " + visibleId);
  }

  hide();
}

// La fonction permet de cacher le dés
function hide() {
  var div, i, dice;

  for (i = 0; i < dices.length; i++) {
    dice = dices[i];
    div = document.getElementById(dice);

    if (visibleId === dice) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}

// La fonction désactive un bouton
function desactiver(id) {
  var node = document.getElementById(id);
  var attribut = document.createAttribute("disabled");
  attribut.value = "disabled";
  node.setAttributeNode(attribut);
  //console.log(node.getAttribute("disabled"));
}

// La fonction active un bouton
function activer(id) {
  var node = document.getElementById(id);
  node.removeAttribute("disabled");
  //console.log(node.getAttribute("disabled"));
}

// La fonction permet de lancer le dés
function rollDice() {
  var scoreRound = Number.parseInt(
    document.getElementById("scoreRound").textContent
  );

  var dice = Math.round(Math.random() * (6 - 1) + 1);
  console.log("dés = " + dice);

  var des;
  switch (dice) {
    case 1:
      des = "one";
      break;

    case 2:
      des = "two";
      break;

    case 3:
      des = "three";
      break;

    case 4:
      des = "four";
      break;

    case 5:
      des = "five";
      break;

    case 6:
      des = "six";
      break;

    default:
      break;
  }

  showDice(des);

  if (dice == 1) {
    document.getElementById("scoreRound").innerHTML = 0;
  } else {
    document.getElementById("scoreRound").innerHTML = scoreRound + dice;
  }
}

// La fonction permet d'ajout le score temporaire au score glogale
function hold() {
  var globale = Number.parseInt(
    document.getElementById("globaleScore").textContent
  );

  var current = Number.parseInt(
    document.getElementById("scoreRound").textContent
  );

  var globale = globale + current;

  document.getElementById("globaleScore").innerHTML = globale;

  document.getElementById("scoreRound").innerHTML = 0;

  if (globale >= 100) {
    alert("Vous avez gagné !");

    desactiver("rollDice");
    desactiver("hold");
  }
}

// Relance une nouvelle partie et réactiver les boutons
function newGame() {
  // Valeur current à zéro
  document.getElementById("scoreRound").innerHTML = 0;
  //console.log(document.getElementById("scoreRound").textContent);

  // Valeur globale à zéro
  document.getElementById("globaleScore").innerHTML = 0;

  activer("rollDice");
  activer("hold");
}
