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
      div.style.display = "inline-grid";
    } else {
      div.style.display = "none";
    }
  }
}

// Affichage Victoire
function affiWin(id){
  var node = document.getElementById(id);
  node.style.display = "flex";
}

// Enlève l'affichage victoire
function supAffiWin(id){
  var node = document.getElementById(id);
  node.style.display = "none";
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


const roll = document.getElementById("rollDice");
console.log(roll);
// On lance le dé
roll.addEventListener("click", (event) => {
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
});


const hold = document.getElementById("hold");
console.log(hold);
// On ajoute le score du round au score global
hold.addEventListener("click", (event) => {
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
    affiWin("win");

    desactiver("rollDice");
    desactiver("hold");
  }
});


const newGame = document.getElementById("newGame");
console.log(newGame);
// Nouvelle partie
newGame.addEventListener("click", (event) => {
  // Valeur current à zéro
  document.getElementById("scoreRound").innerHTML = 0;
  //console.log(document.getElementById("scoreRound").textContent);

  // Valeur globale à zéro
  document.getElementById("globaleScore").innerHTML = 0;

  supAffiWin("win");

  activer("rollDice");
  activer("hold");
})