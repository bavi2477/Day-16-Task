let countdown = 10;

function countdownCallback() {
 
  const countdownDisplay = document.getElementById("countdownDisplay");

 
  countdownDisplay.textContent = countdown;

  
  if (countdown > 1) {
    countdown--;

    setTimeout(countdownCallback, 1000);
  } else {
    countdownDisplay.textContent = "";
        
        republicDayMessage.textContent = "Happy Republic Day!";
        republicDayMessage.style.color = "";

    document.body.style.backgroundImage = 'url("assets/Flag_of_India.gif")';

    
  }
}

countdownCallback();