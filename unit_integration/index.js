module.exports = {
  rockPaperScissors: function (a, b) {
    // Both players playing same thing
    if (a === b) {
      return 'tie';
    }

    // Conditions where 'a' wins
    if ((a === 'rock' && b === 'scissors') ||
        (a === 'paper' && b === 'rock') ||
        (a === 'scissors' && b === 'paper')) {
        return 'a';
    }

    // Conditions where 'b' wins
    if ((a === 'rock' && b === 'paper') ||
        (a === 'paper' && b === 'scissors') ||
        (a === 'scissors' && b === 'rock')) {
        return 'b';
    }
  }
}