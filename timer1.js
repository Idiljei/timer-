//node timer1.js 10 3 5 15 9 


const timer = process.argv.slice(2); //timer is from user input
let seconds = 0;


for (let time of timer) { // to get the time entered by user 

if (time > 0 && time !== NaN) { //greater than 0 and only a number 
  seconds = timer * 1000 
}
setTimeout(() => {
  process.stdout.write('\x07'); //doesn't beep on comp but it should
  console.log('ALARM ALARM ALARM'); //put ALARM to make sure it works 
}, seconds);  
}


 //console.log(input);