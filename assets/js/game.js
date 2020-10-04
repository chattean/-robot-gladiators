
// for(var i = 0; i < enemyNames.length; i++) {
//   console.log(enemyNames[i]);
//   console.log(i);
//   console.log(enemyNames[i] + " is at " + i + " index");
// }
window.alert("Welcome to Gladiators!");

  /* setting up Variables*/
  var playerName = window.prompt("What is the name of your Robot?");
  var playerHealth= 100;
  var playerAttack= 10;
  var playerMoney=10;
  // You can also log multiple values at once like this
  // console.log(playerName,playerHealth, playerAttack);

  // var enemy1 = "Roberto"
  // var enemy2 = "Amy andriod"
  // var enemy3 = "Robo Trumble"

  var enemyNames = ["Roberto", "Amy andriod", "Robo Trumble"];
  // var enemyHealth = "50";
  var enemyAttack = "12";

var fight= function(enemyName){
  while(enemyHealth > 0&& playerHealth > 0){
    var promptFight= prompt("Would you like to Fight or Skip this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === 'skip' || promptFight === 'SKIP'){
      alert(playerName + " has chosen to skip the fight!");
      var confimSkip = confirm("Are you sure you want to Quit?");

      if (confimSkip){
        alert(playerName + " has decided to skip this fight, goodbye");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    if (promptFight === 'fight' || promptFight === 'FIGHT'){
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        // check if Enemy has died
      if (enemyHealth<=0){
        window.alert(enemyName + " has Died");
        // award player money for winning
        playerMoney = playerMoney + 20;
        break;
      }
      else{
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

// fight();
for(var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = "50"
  fight(pickedEnemyName);

}
