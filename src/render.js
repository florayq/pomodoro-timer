// // In the render.js file.

// function startTimer(){

//     // Retrieve the values of your inputs
//     var seconds = document.getElementById("seconds").value || 0;
//     var minutes = document.getElementById("minutes").value || 0;
//     var hours = document.getElementById("hours").value || 0;
    
//     // Calculate the total amount of milliseconds (1000 times the number of seconds).
//     var totalMilliseconds = 1000*(Number(seconds) + Number(minutes)*60 + Number(hours)*60*60)
    
//     // Start the timer with javascript builtin. 
//     setTimeout(doSomething, totalMilliseconds)
//   }
  
//   function doSomething() {
//     // Do something
//     alert("Time is over!");
//   }