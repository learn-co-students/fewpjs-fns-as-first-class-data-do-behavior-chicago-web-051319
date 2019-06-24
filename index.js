/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  let currentTime = timeString.split(":").join("");
  currentTime = parseInt(currentTime);
  if (currentTime < 1200) {
    return "Good Morning";
  }
  if (currentTime >= 1200 && currentTime <= 1700) {
    return "Good Afternoon";
  }
  if (currentTime > 1700){
    return "Good Evening";
  }
}

function displayMessage(greet){
  let content = document.getElementById("greeting");
  content.innerText = greet;
}
