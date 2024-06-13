import {
  showDice,
  hide,
  affiWin,
  supAffiWin,
  desactiver,
  activer,
} from "./fonctions_jeu_des.js";

// Valeur current à zéro
document.getElementById("scoreRound").innerHTML = 0;

// Valeur globale à zéro
document.getElementById("globaleScore1").innerHTML = 90;
document.getElementById("globaleScore2").innerHTML = 90;

// On désactive hold 1 pour obliger le joueur 1 à lancer le dé au moins une fois
desactiver("hold1");
// On désactive le joueur 2 car c'est le joueur 1 qui commence
desactiver("rollDice2");
desactiver("hold2");

// BOUTON ROLL DICE 1
const roll1 = document.getElementById("rollDice1");
//console.log(roll1);
// Lancement du dé lorsqu'on clique sur le bouton "Roll dice 1"
roll1.addEventListener("click", (event) => {
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

    desactiver("rollDice1");
    desactiver("hold1");
    activer("rollDice2");
  } else {
    document.getElementById("scoreRound").innerHTML = scoreRound + dice;
    activer("hold1");
  }
});

// BOUTON ROLL DICE 2
const roll2 = document.getElementById("rollDice2");
//console.log(roll2);
// Lancement du dé lorsqu'on clique sur le bouton "Roll dice"
roll2.addEventListener("click", (event) => {
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

    desactiver("rollDice2");
    desactiver("hold2");
    activer("rollDice1");
  } else {
    document.getElementById("scoreRound").innerHTML = scoreRound + dice;
    activer("hold2");
  }
});

// BOUTON HOLD 1
const hold1 = document.getElementById("hold1");
console.log(hold1);
// On ajoute le score du round au score global
hold1.addEventListener("click", (event) => {
  var globale1 = Number.parseInt(
    document.getElementById("globaleScore1").textContent
  );

  var current = Number.parseInt(
    document.getElementById("scoreRound").textContent
  );

  var globale1 = globale1 + current;

  document.getElementById("globaleScore1").innerHTML = globale1;

  document.getElementById("scoreRound").innerHTML = 0;

  desactiver("rollDice1");
  desactiver("hold1");

  activer("rollDice2");

  // Condition sur la fin de la partie
  if (globale1 >= 100) {
    affiWin("win");

    desactiver("rollDice2");
    desactiver("hold2");
  }
});

// BOUTON HOLD 2
const hold2 = document.getElementById("hold2");
console.log(hold2);
// On ajoute le score du round au score global
hold2.addEventListener("click", (event) => {
  var globale2 = Number.parseInt(
    document.getElementById("globaleScore2").textContent
  );

  var current = Number.parseInt(
    document.getElementById("scoreRound").textContent
  );

  var globale2 = globale2 + current;

  document.getElementById("globaleScore2").innerHTML = globale2;

  document.getElementById("scoreRound").innerHTML = 0;

  desactiver("rollDice2");
  desactiver("hold2");

  activer("rollDice1");

  // Condition sur la fin de la partie
  if (globale2 >= 100) {
    affiWin("win");

    desactiver("rollDice1");
    desactiver("hold1");
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
  document.getElementById("globaleScore1").innerHTML = 0;
  document.getElementById("globaleScore2").innerHTML = 0;

  supAffiWin("win");

  activer("rollDice1");
  
  desactiver("rollDice2");
  desactiver("hold2");
});
