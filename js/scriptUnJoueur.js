// Valeur current par défaut
document.getElementById("scoreRound").innerHTML = 0;
//console.log(document.getElementById("scoreRound").textContent);

document.getElementById("globaleScore").innerHTML = 99;

var dices = ["one", "two", "three", "four", "five", "six"];
var visibleId = null;

// La fonction permet d'afficher le dés
function showDice(dice) {
    if (visibleId !== dice) {
      visibleId = dice;
  
      console.log("visible = " + visibleId);
    }
  
    hide();
  
    // La fonction permet de cacher le dés
    function hide() {
      var div, i, dice;
  
      for (i = 0; i < dices.length; i++) {
        dice = dices[i];
        div = document.getElementById(dice);
  
        if (visibleId === dice){
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
      }
    }
  }

  // La méthode désactive un bouton
function desactiver(id){
  var node = document.getElementById(id);
  var a = document.createAttribute("disabled");
  a.value = "disabled";
  node.setAttributeNode(a);
  console.log(node.getAttribute("disabled"));
}

function rollDice() {
  var scoreRound = Number.parseInt(
    document.getElementById("scoreRound").textContent
  );

  var dice = Math.round(Math.random() * (6 - 1) + 1);
  console.log("dés = " + dice);

  var des;
  switch (dice) {
    case 1:
        des = "one"
        break;

        case 2:
        des = "two"
        break;

        case 3:
        des = "three"
        break;

        case 4:
        des = "four"
        break;

        case 5:
        des = "five"
        break;

        case 6:
        des = "six"
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
  
  //console.log(dice);

  return dice;
}

// La fonction permet d'ajout le score temporaire au score glogale
function hold(){
  var globale = Number.parseInt(document.getElementById("globaleScore").textContent);

  var current = Number.parseInt(document.getElementById("scoreRound").textContent);

  var globale = globale + current;

  document.getElementById("globaleScore").innerHTML = globale;

  document.getElementById("scoreRound").innerHTML = 0;

  if (globale >= 100) {
    alert("Vous avez gagné !");

    desactiver("rollDice");
    desactiver("hold");
   
  }
}
