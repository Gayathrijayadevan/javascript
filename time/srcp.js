// this is the general code to display a timer in console 
function display(){
    // console.log('display');
}
const a=setInterval(display,2000)

// let count=10
// let b=setInterval(function(){
//     console.log(count);
//     count--
//     if(count==0){
//         clearInterval(b)
//         console.log('finish');
        
//     }
// },2000)

function demo() {
    const main = document.querySelector('.main');
    const div = document.createElement('div');
    let count = 59
    let min = 3
    let isRunning = false

    let b = setInterval(function() {
      if (isRunning) {
        div.innerHTML = `<h1 style="color:red">Timer: ${min}:${count}</h1>`;
        count--
        if (count == 0) {
          min--
          if (min == 0) {
            isRunning = false;
            div.innerHTML = `<h1 style="color:red">completed</h1>`;
          } else {
            count = 59;
          }
        }
      }
    }, 1000);
  
    isRunning = true;
    main.appendChild(div);
  }
  demo();