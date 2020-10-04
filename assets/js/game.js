// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value =Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

var fight = function (enemy) {
  console.log(enemy)
  while (enemy.health > 0 && playerInfo.health > 0) {
    var promptFight = prompt("Would you like to Fight or Skip this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === 'skip' || promptFight === 'SKIP') {
      alert(playerInfo.name + " has chosen to skip the fight!");
      var confimSkip = confirm("Are you sure you want to Quit?");

      if (confimSkip) {
        alert(playerInfo.name + " has decided to skip this fight, goodbye");
        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);        console.log("playerInfo.money", playerInfo.money);
        break;
      }
    }

    if (promptFight === 'fight' || promptFight === 'FIGHT') {
      // generate random damage value based on player's attack power
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
      enemy.health = Math.max(0, enemy.health - damage);

      console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
      // check if Enemy has died
      if (enemy.health <= 0) {
        window.alert(enemy.name + " has Died");
        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
        break;
      }
      else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
      }

      var damage = randomNumber(enemy.attack - 3, enemy.attack);
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      
      console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

      // check to see if the value of the playerInfo.health variable is greater than 0
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        break;
      }
      else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
      }
    }
  }
};

var startGame = function () {
  // reset player stats
  playerInfo.reset();

  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators!" + (i + 1));
      var pickedEnemyObj = enemyInfo[i];
      pickedEnemyObj.health = randomNumber(40, 60);
      debugger;
      fight(pickedEnemyObj);
    }
    // if we're not at the last enemy in the array
    if (playerInfo.health > 0 && i < enemy.names.length - 1) {
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
      playerInfo.refillHealth();
      break;
    case "UPGRADE": // new case
    case "upgrade":
      playerInfo.upgradeAttack();
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
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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

/* setting up Variables*/

var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  }
};
var enemyInfo = [
  {
    name: "Roborto",
    attack: 12
  },
  {
    name: "Amy Android",
    attack: 13
  },
  {
    name: "Robo Trumble",
    attack: 14
  }
];
// start the game when the page loads
startGame();
