/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let newTime = time.split(":")
  let a = parseInt(newTime[0]);

  if (a < 12) {
    return "Good Morning"
  } else if (a < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
};

/* Write your implementation of displayMessage() */

function displayMessage(message) {
  document.getElementById("greeting").innerHTML = message;

};
