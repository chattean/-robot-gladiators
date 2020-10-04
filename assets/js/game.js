
// for(var i = 0; i < enemyNames.length; i++) {
//   console.log(enemyNames[i]);
//   console.log(i);
//   console.log(enemyNames[i] + " is at " + i + " index");
// }
// window.alert("Welcome to Gladiators!");

/* setting up Variables*/
var playerName = window.prompt("What is the name of your Robot?");
var playerHealth = 10;
var playerAttack = 10;
var playerMoney = 10;
// You can also log multiple values at once like this
// console.log(playerName,playerHealth, playerAttack);

// var enemy1 = "Roberto"
// var enemy2 = "Amy andriod"
// var enemy3 = "Robo Trumble"

var enemyNames = ["Roberto", "Amy andriod", "Robo Trumble"];
// var enemyHealth = "50";
var enemyAttack = "12";

var fight = function (enemyName) {
  while (enemyHealth > 0 && playerHealth > 0) {
    var promptFight = prompt("Would you like to Fight or Skip this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === 'skip' || promptFight === 'SKIP') {
      alert(playerName + " has chosen to skip the fight!");
      var confimSkip = confirm("Are you sure you want to Quit?");

      if (confimSkip) {
        alert(playerName + " has decided to skip this fight, goodbye");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    if (promptFight === 'fight' || promptFight === 'FIGHT') {
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
      // check if Enemy has died
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has Died");
        // award player money for winning
        playerMoney = playerMoney + 20;
        break;
      }
      else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }
      // remove player's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

      // check to see if the value of the playerHealth variable is greater than 0
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
      }
      else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
    }
  }
};

var startGame = function () {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators!" + (i + 1));
      var pickedEnemyName = enemyNames[i];
      enemyHealth = "20";
      debugger;
      fight(pickedEnemyName);
    }
    // if we're not at the last enemy in the array
    if (playerHealth > 0 && i < enemyNames.length - 1) {
      // ask if the user wants to enter the store before the next round
      var storeConfirm = confirm("The fight is over, visit the store before the next round?")
      // if yes, take them to the store() function
      if (storeConfirm) {
        shop();
      }
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();
};


var shop = function () {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  switch (shopOptionPrompt) {
    case "REFILL": // new case
    case "refill":
      if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");

        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }

      break;
    case "UPGRADE": // new case
    case "upgrade":
      if (playerMoney >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");

        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }

      break;
    case "LEAVE": // new case
    case "leave":
      window.alert("Leaving the store.");
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }
};

// function to end the entire game
var endGame = function () {
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  }
  else {
    window.alert("You've lost your robot in battle.");
  }
  // ask player if they'd like to play again
  var playAgainConfirm = confirm("Would you like to play again?")
  if (playAgainConfirm) {
    // restart the game
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

// start the game when the page loads
startGame();
