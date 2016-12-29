var numbers = [12, 54, 32, 45, 21, 69, 20];
function generateNumber(index) {
  var desired = numbers[index];
  var duration = 2000;

  var output = $('#output' + index); // Start ID with letter
  var started = new Date().getTime();

  animationTimer = setInterval(function() {
    if (output.text().trim() === desired || new Date().getTime() - started > duration) {
      clearInterval(animationTimer); // Stop the loop
      output.text(desired); // Print desired number in case it stopped at a different one due to duration expiration
      generateNumber(index + 1);
    } else {
      output.text(
        '' +
        Math.floor(Math.random() * 10) +
        Math.floor(Math.random() * 10)
      );
    }
  }, 100);
}

generateNumber(0);
