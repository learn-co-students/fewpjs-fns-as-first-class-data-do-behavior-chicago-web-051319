/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function timeToDecimal(t){
  let arr = t.split(':');
  let dec = parseInt((arr[1]/6)*10, 10);
  return parseFloat(parseInt(arr[0],10)+'.'+(dec<10?'0':'')+dec);
}


function greet(time = "HH:MM"){
  let decimaltime = timeToDecimal(time)
  if (decimaltime < 12){
    return "Good Morning"
  }else if (decimaltime>17) {
    return "Good Evening"
  }else{
    return "Good Afternoon"
  }
};

/* Write your implementation of displayMessage() */

function displayMessage(message){
  let textinside = document.getElementById('greeting');
  textinside.innerText = message;
};
