// Valeur current par défaut
document.getElementById("scoreRound").innerHTML = 0;

console.log(document.getElementById("scoreRound").textContent);

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

//console.log(rollDice.dice);
