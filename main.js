// 1.
// function showMessage(x) {

//     console.log(x);
//   }
//   showMessage("Salom");
//   showMessage("Xayr");
//   showMessage();

// //   2.
// function yigindi(a, b) {
//     return a + b;
//   }
  
//   let result = yigindi(3, 4);
//   console.log( result ); // 7

// //   3.
// function sumOfTwoNumbers(x, y) {
// let result = x + y;
// console.log(result);
// }

// sumOfTwoNumbers(3, 4);
// sumOfTwoNumbers(10, 15);

// // 4.
// function promptToNumber () {
//     let result = prompt("Malumot");
//     result = +result;
//     if (isNaN(result)) {
//         alert("Son hosil qilib bo'lmadi!!!");
//     } else {
//         alert (result);
//     }
// }

// promptToNumber ();

// // 5.
// function sum(l, m) {
//     let resultt = l + m;
//     return resultt;
// }

// let natija  = sum(3, 4);
// console.log(natija);

// 6.
// function isEven(K) {
//     if (K % 2) {
//         console.log("${if}: true");
//     } else if (K % 2) {
//         console.log("${if}: false");
//     }
// }

// let K = +prompt("son kiriting")
// console.log(isEven(K));

// 7.
//     let son = +prompt("Son kiriting");

// function isEvenOrOdd(num) {
//     if(num > 0 && num % 2 == 0) {
//         return "Juft";
//     } else if (num > 0 && num % 2 == 1) {
//         return "Toq";
//     } else {
//         return "Juft ham toq ham emas";
//     }
// }
// let result = isEvenOrOdd(son);
// alert(result);

// 8.
// let son = +prompt("Son kiriting");

// function isEvenOrOdd(num) {
//     if(num > 0 && num % 2 == 0) {
//         return "Juft";
//     } else if (num > 0 && num % 2 == 1) {
//         return "Toq";
//     } else {
//         return "Juft ham toq ham emas";
//     }
// }
// // function declaration
// function doJob(){
// let result = isEvenOrOdd(son);
// alert(result);
// }
// // function expression
// let a = function() {
// console.log("salom");
// }

// a();

// // arrow function;
// let b = (x, y) => x + y;

// console.log(b(4, 5));


// uyga vazifa
// 1.
// printNumber = function(a) {
//     console.log(a);
//     if(a == 10) {
//         return;
//     }
//     printNumber(a + 1);
// }

// printNumber(1);

// 2.
// printNumber = function(b) {
//     console.log(b);
// for(let b = 1; b <= 100; b++) {
//  if(b % 2 != 1) {
//     console.log(b + "");
//  }
// }
// }

// 3.
// const number = parseInt(prompt('Enter an integer: '));
// const range = parseInt(prompt('Enter a range: '));
// for(let i = 1; i <= range; i++) {
//     const result = i * number;
//     console.log(`${number} * ${i} = ${result}`);
// }

// 4.
// function calculateSum() {
//     let sum = 0;
  
//     for (let i = 1; i <= 10; i++) {
//       sum += i;
//     }
  
//     return sum;
//   }
  
//   console.log(calculateSum())

//   5.
// function calculateProduct() {
//     let product = 1;
  
//     for (let i = 1; i <= 10; i++) {
//       product *= i;
//     }
  
//     return product;
//   }
  
  
//   console.log(calculateProduct());

//   6.



// 7.
// function cToF(celsius) 
// {
//   let  cTemp = celsius;
//   let cToFahr = cTemp * 9 / 5 + 32;
//   let message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//     console.log(message);
// }

// function fToC(fahrenheit) 
// {
//   let fTemp = fahrenheit;
//   let fToCel = (fTemp - 32) * 5 / 9;
//   let message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//     console.log(message);
// } 
// cToF(60);
// fToC(45);

// function celcToFahr( n ) { 
// 	return ((n * 9.0 / 5.0) + 32.0); 
// } 

// const n = 20; 

// console.log(celcToFahr( n ));

// 8.
function convertFahrenheitToCelsius(temperature) {
	return (temperature - 32) * (5/9)
}
var theirInput = prompt("Enter in a Fahrenheit temperature & I'll convert it to Celsius");
var result = convertFahrenheitToCelsius(theirInput);
console.log(result);