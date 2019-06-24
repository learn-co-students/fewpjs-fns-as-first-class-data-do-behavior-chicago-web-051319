/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(time) {
  let hour = Number(time.split(":")[0]);

  if (hour < 12) {
    // console.log(hour)
    return "Good Morning";
  }else if (hour > 12 && hour < 17) {
    return "Good Afternoon";
  }else {
    return "Good Evening";
  }
}
function displayMessage(message) {
   let greeting = document.getElementById("greeting");
   greeting.innerText = message;
}


/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
