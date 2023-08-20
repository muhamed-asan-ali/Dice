// let player1Score = 0;
// let player2Score = 0;
// let currentPlayer = 1;

// function rollDice() {
//   const diceValue = Math.floor(Math.random() * 6) + 1;

//   if (currentPlayer === 1) {
//     player1Score += diceValue;
//     document.getElementById('player1').textContent = `Player 1: ${player1Score}`;
//     currentPlayer = 2;
//   } else {
//     player2Score += diceValue;
//     document.getElementById('player2').textContent = `Player 2: ${player2Score}`;
//     currentPlayer = 1;
//   }

//   document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
// }

const dicePicElement = document.getElementById("dice-pic");
let player1Score = 0;
let player2Score = 0;

    function rollDice(player) {
      const diceValue = Math.floor(Math.random() * 6) + 1;
      rollDicePicture(diceValue);

      if (player === 1) {
        player1Score += diceValue;
        document.getElementById('player1').textContent = `Player 1: ${player1Score}`;
      } else if (player === 2) {
        player2Score += diceValue;
        document.getElementById('player2').textContent = `Player 2: ${player2Score}`;
      }

      updateStatus();
    }

    function updateStatus() {
      if (player1Score >= 30 || player2Score >= 30) {
        if (player1Score > player2Score) {
          document.getElementById('status').textContent = 'Player 1 wins!';
        } else if (player2Score > player1Score) {
          document.getElementById('status').textContent = 'Player 2 wins!';
        } else {
          document.getElementById('status').textContent = "It's a tie!";
        }

        document.getElementById('player1Button').disabled = true;
        document.getElementById('player2Button').disabled = true;
      }
    }

    function rollDicePicture(diceValue){
        const imageName = `${diceValue}.png`;
        dicePicElement.setAttribute('src', imageName);
      }