/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() 
*/

function greet(input) {
  const time = parseInt(input.split(':').join(""))
  if (time < 1200 ){
    return 'Good Morning'
  }else if (time > 1700 ){
    return 'Good Evening'
  }else{
    return 'Good Afternoon'
  }
}


function displayMessage(string) {
  let content = document.getElementById("greeting")
  content.innerText = string
}





/* Write your implementation of displayMessage() 
Takes in a string and convert to number
*/
