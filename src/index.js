const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.baby');
const startButton = document.querySelector('#start');
// TODO: Add the missing query selectors:
const score = document.querySelectorAll('.score');; // Use querySelector() to get the score element
const timerDisplay = document.querySelector('#timer');; // use querySelector() to get the timer element.

let time = 0;
let timer;
let lastHole = 0;
let points = 0;
let difficulty = "hard";

/**
 * Generates a random integer within a range.
 *
 * The function takes two values as parameters that limits the range 
 * of the number to be generated. For example, calling randomInteger(0,10)
 * will return a random integer between 0 and 10. Calling randomInteger(10,200)
 * will return a random integer between 10 and 200.
 *
 */
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("A random integer between 0 and 10");
console.log(randomInteger(0, 10));

/**
 * Sets the time delay given a difficulty parameter.
 *
 * The function takes a `difficulty` parameter that can have three values: `easy`
 * `normal` or `hard`. If difficulty is "easy" then the function returns a time delay
 * of 1500 milliseconds (or 1.5 seconds). If the difficulty is set to "normal" it should
 * return 1000. If difficulty is set to "hard" it should return a randomInteger between
 * 600 and 1200.
 *
 * Example: 
 * setDelay("easy") //> returns 1500
 * setDelay("normal") //> returns 1000
 * setDelay("hard") //> returns 856 (returns a random number between 600 and 1200).
 *
 */
  // TODO: Write your code here.
  function setDelay(difficulty) {
  switch (difficulty) {
    case "easy":
      return 1500;
    case "normal":
      return 1000;
    case "hard":
      // Generate a random number between 600 and 1200
      return Math.floor(Math.random() * (1200 - 600 + 1)) + 600;
    default:
      // Handle unexpected difficulty values
      console.error("Invalid difficulty parameter");
      return 0; // You can choose an appropriate default value
  }
}

// Example usage:
const easyDelay = setDelay("easy");
const normalDelay = setDelay("normal");
const hardDelay = setDelay("hard");

console.log(easyDelay);   // Output: 1500
console.log(normalDelay); // Output: 1000
console.log(hardDelay);   // Output: Random number between 600 and 1200

  
}

/**
 * Chooses a random hole from a list of holes.
 *
 * This function should select a random Hole from the list of holes.
 * 1. generate a random integer from 0 to 8 and assign it to an index variable
 * 2. get a random hole with the random index (e.g. const hole = holes[index])
 * 3. if hole === lastHole then call chooseHole(holes) again.
 * 4. if hole is not the same as the lastHole then keep track of 
 * it (lastHole = hole) and return the hole
 *
 * Example: 
 * const holes = document.querySelectorAll('.hole');
 * chooseHole(holes) //> returns one of the 9 holes that you defined
 */
function chooseHole(holes) {
  // TODO: Write your code here.
  function chooseHole(holes) {
  const lastIndex = chooseHole.lastIndex;
  let index;

  do {
    index = Math.floor(Math.random() * holes.length);
  } while (index === lastIndex);

  chooseHole.lastIndex = index;
  return holes[index];
}

// Example usage:
const holes = document.querySelectorAll('.hole');
chooseHole.lastIndex = -1; // Initialize lastIndex outside the function

const randomHole = chooseHole(holes);
console.log(randomHole);


}

/**
*
* Calls the showUp function if time > 0 and stops the game if time = 0.
*
* The purpose of this function is simply to determine if the game should
* continue or stop. The game continues if there is still time `if(time > 0)`.
* If there is still time then `showUp()` needs to be called again so that
* it sets a different delay and a different hole. If there is no more time
* then it should call the `stopGame()` function. The function also needs to
* return the timeoutId if the game continues or the string "game stopped"
* if the game is over.
*
*  // if time > 0:
*  //   timeoutId = showUp()
*  //   return timeoutId
*  // else
*  //   gameStopped = stopGame()
*  //   return gameStopped
*
*/
function gameOver() {
  // TODO: Write your code here
if (time > 0){
 const timeoutId = showUp();
return timeoutId;
}else{
 const gameStopped = stopGame()
return gameStopped
}
}
const timeRemaining = 10; // Replace this with the actual value of time
const result = gameOver(timeRemaining);
console.log(result);
/**
*
* Calls the showAndHide() function with a specific delay and a hole.
*
* This function simply calls the `showAndHide` function with a specific
* delay and hole. The function needs to call `setDelay()` and `chooseHole()`
* to call `showAndHide(hole, delay)`.
*
*/
function showUp() {
  let delay = 0 = setDelay(); // TODO: Update so that it uses setDelay()
  const hole = 0 = chooseHole();  // TODO: Update so that it use chooseHole()
  return showAndHide(hole, delay);
}

/**
*
* The purpose of this function is to show and hide the mole given
* a delay time and the hole where the mole is hidden. The function calls
* `toggleVisibility` to show or hide the mole. The function should return
* the timeoutID
*
*/
function showAndHide(hole, delay) {
  // Call toggleVisibility to show the mole
  toggleVisibility(hole, 'show');

  // Set the correct delay for setTimeout based on the parameter
  const timeoutID = setTimeout(() => {
    // Call toggleVisibility to hide the mole when the timer times out
    toggleVisibility(hole, 'hide');

    // You might want to do something else here or leave it as is
    // For example, you can call another function or handle game logic

    // For now, I'm calling gameOver() as in your original code
    gameOver();
  }, delay);

  return timeoutID;
}

// Example implementation of toggleVisibility function (replace it with your actual implementation)
function toggleVisibility(hole, action) {
  // TODO: Implement logic to toggle visibility based on the action
  // For example, you can add or remove a CSS class to show or hide the mole
  const moleElement = document.getElementById(`hole-${hole}`);
  if (action === 'show') {
    moleElement.classList.add('show');
  } else if (action === 'hide') {
    moleElement.classList.remove('show');
  }
}

// Example usage:
const holeNumber = 1; // Replace with the actual hole number
const delayTime = 1000; // Replace with the actual delay time
const result = showAndHide(holeNumber, delayTime);
console.log(result);

/**
*
* Adds or removes the 'show' class that is defined in styles.css to 
* a given hole. It returns the hole.
*
*/
function toggleVisibility(hole){
  // TODO: add hole.classList.toggle so that it adds or removes the 'show' class.
  hole.classList.toggle('show');
  return hole;
}

/**
*
* This function increments the points global variable and updates the scoreboard.
* Use the `points` global variable that is already defined and increment it by 1.
* After the `points` variable is incremented proceed by updating the scoreboard
* that you defined in the `index.html` file. To update the scoreboard you can use 
* `score.textContent = points;`. Use the comments in the function as a guide 
* for your implementation:
*
*/
function updateScore() {
  // TODO: Write your code here
points++;
  const score = document.getElementById('score');
  score.text.textContent = points;
  return points;
}

/**
*
* This function clears the score by setting `points = 0`. It also updates
* the board using `score.textContent = points`. The function should return
* the points.
*
*/
function clearScore() {
  // TODO: Write your code here
  points = 0;
  score.textContent = points;
  return points;
}

/**
*
* Updates the control board with the timer if time > 0
*look at what i added
*/
function updateTimer() {
  // TODO: Write your code here.
  // Hint: The provided code checks if the timer is greater than 0 and returns the time value.
  // You should update the control board with the timer value if time > 0.

  if (timer > 0) {
    // Assuming you have an element with the ID 'timer' for your control board
    const timerElement = document.getElementById('timer');
    
    // Update the control board with the timer value
    timerElement.textContent = timer;

    // Return the time value
    return time;
  } else {
    // Handle the case when time is not greater than 0, if needed
    return 0;
  }
}


/**
*
* Starts the timer using setInterval. For each 1000ms (1 second)
* the updateTimer function get called. This function is already implemented
*
*/
function startTimer() {
  // TODO: Write your code here
  timer = setInterval(updateTimer, 1000);
  return timer;
}

/**
*
* This is the event handler that gets called when a player
* clicks on a mole. The setEventListeners should use this event
* handler (e.g. mole.addEventListener('click', whack)) for each of
* the moles.
*
*/
function whack(event) {
  // TODO: Write your code here.
  call updateScore()
  return points;
}

/**
*
* Adds the 'click' event listeners to the moles. See the instructions
* for an example on how to set event listeners using a for loop.
*/
function setEventListeners() {
  // Assuming you have mole elements with the class 'mole'
  const moleElements = document.querySelectorAll('.mole');

  // Add 'click' event listener to each mole
  moleElements.forEach(mole => {
    mole.addEventListener('click', whack);
  });

  // Return the mole elements in case you need to interact with them later
  return moleElements;
}

/**
*
* This function sets the duration of the game. The time limit, in seconds,
* that a player has to click on the sprites.
*
*/
function setDuration(duration) {
  time = duration;
  return time;
}

/**
*
* This function is called when the game is stopped. It clears the
* timer using clearInterval. Returns "game stopped".
*
*/
function stopGame(){
  stopAudio(song);  //optional
  clearInterval(timer);
  return "game stopped";
}

/**
*
* This is the function that starts the game when the `startButton`
* is clicked.
*
*/
function startGame(){
 setDuration(10);
  howUp();
  return "game started";
}

startButton.addEventListener("click", startGame);


// Please do not modify the code below.
// Used for testing purposes.
window.randomInteger = randomInteger;
window.chooseHole = chooseHole;
window.setDelay = setDelay;
window.startGame = startGame;
window.gameOver = gameOver;
window.showUp = showUp;
window.holes = holes;
window.moles = moles;
window.showAndHide = showAndHide;
window.points = points;
window.updateScore = updateScore;
window.clearScore = clearScore;
window.whack = whack;
window.time = time;
window.setDuration = setDuration;
window.toggleVisibility = toggleVisibility;
window.setEventListeners = setEventListeners;
