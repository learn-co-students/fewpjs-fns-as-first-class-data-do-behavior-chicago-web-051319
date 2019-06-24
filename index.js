/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  let hour = parseInt(time.split(":")[0])
  if (hour < 12){
    return "Good Morning"
  }else if (12 < hour && hour < 17) {
    return "Good Afternoon"
  }else if (5 < hour) {
    return "Good Evening"
  }
  // console.log(hour)
}
// greet()

function displayMessage(greeting){
  document.getElementById("greeting").innerText = greeting;
}


/* Write your implementation of displayMessage() */
