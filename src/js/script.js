// 1

let numberOne = prompt('Введіть число');
let numberTwo = prompt('Введіть степінь');

function pow(x,n){
return Math.pow(x,n)
}

console.log(pow(numberOne,numberTwo));

// 2

// let x = prompt("Введіть перше число",);
// let y = prompt("Введіть друге число",);

// function chusla (x, y) {
// 	if (y > x) return chusla(y, x);
// 	if (!y) return x;
// 	return chusla(y, x % y);
// }
// console.log(chusla(x,y));

// 3

//  let x = prompt("Введіть число",);
// if(x > 0){
//   console.log(Math.max(...x));
// }else{
//   alert('Помилка')
// }


// 4

  // let n = prompt("Введіть число",);

  // function primeNumb(num) {
  //   if (num > 1) {
  //     for (let i = 2; i < num; i++) {
  //       if (num % i == 0) {
  //         return "Складене число";
  //       }
  //     }
  //     return "Просте число";
  //   } else {
  //     return "Число має бути більше 1";
  //   }
  // }
  
  // console.log(primeNumb(n));

  // 5
  // const USERNUMBER = Number(prompt('Введіть число'));
  // factors(USERNUMBER, 1);

  // function factors(USERNUMBER, i) {
  //   if (USERNUMBER <= 0) {
  //     alert('Ви ввели невірне число!!!')
  //   }
  //   if (i <= USERNUMBER) {
  //     if (USERNUMBER % i == 0) {
  //       console.log(i + " ");
  //     }
  //     factors(USERNUMBER, i + 1);
  //   }
  // }

 // 6

//  let a = prompt("Введіть число",);

//  function fib(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }

// alert( fib(a) );