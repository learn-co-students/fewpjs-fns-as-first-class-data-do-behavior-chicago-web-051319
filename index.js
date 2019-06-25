/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

const greet = time => {
  let hours = Number(time.split(':')[0]);
  let minutes = Number(time.split(':')[1]);

  if (hours <= 11) {
    return "Good Morning";
  } else if (hours >= 5 && minutes > 1) {
    return "Good Evening";
  }
  return "Good Afternoon";
}
/* Write your implementation of displayMessage() */


const displayMessage = message => {
  let target = document.querySelector('#greeting');
  target.innerText = message;
}
