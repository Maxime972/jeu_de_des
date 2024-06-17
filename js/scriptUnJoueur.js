import { showDice , hide , affiDiv , supAffiDiv , desactiver , activer} from "./fonctions_jeu_des.js";

// Valeur current à zéro
document.getElementById("scoreRound").innerHTML = 0;

// Valeur globale à zéro
document.getElementById("globaleScore").innerHTML = 0;

const roll = document.getElementById("rollDice");
//console.log(roll);
// Lancement du dé lorsqu'on clique sur le bouton "Roll dice"
roll.addEventListener("click", (event) => {
  var scoreRound = Number.parseInt(
    document.getElementById("scoreRound").textContent
  );

  // Tire un nombre entier compris entre 1 et 6
  var dice = Math.round(Math.random() * (6 - 1) + 1);
  console.log("dés = " + dice);

  // Affiche les id des faces du dé
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
  hide();

  // Condition si le dé est égale à 1, le score du Round est remis à zéro
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

  // Condition sur la fin de la partie 
  if (globale >= 100) {
    affiDiv("win");

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

  supAffiDiv("win");

  activer("rollDice");
  activer("hold");
});