// console.log('Chi-ife ');



// var integer = 34;
// number= 34*7;
// console.log(number);

// let integer = 34;
// number= 34*7;
// console.log(number);

// const integer = 34;
//     number= 34*7;


// console.log(number);

// prompt('yes or noyes');

// alert('There is a big problem');

// var no1= +(prompt('Enter the first number'));
// var no2= +(prompt('Enter the second number'));
// alert(no1 + no2);

// const arr= [6, 7, 7, 9];

// const nombre= ' Chi-ife';
// const age= ' 17'
// const program= ' Full stack development'

// let statement= 'Hi, my name is' +nombre+ ', I am' +age + 'years old and I am learning' 
// +program +" at CBC"
// console.log(statement);

// let num1= String(34);
// let num2= String(2);

// console.log(num1 * num2)

// let num1= 71
// let num2= '7'
// console.log(num1 + num2)

// Concat method
// const fName = 'Benedict';
// const lName = 'Doe'
// const statement= 'Yo, what\'s up';
// const sentence = 'Hey, how are you'
// let val;
// val = fName.concat(' ',lName)
// console.log(val)

// // Case Conversion
// val = fName.toUpperCase();
// val = fName.toLowerCase();
// console.log(val)

// // indexof
// val = fName.indexOf('n');
// console.log(val)

// // substring
// val = fName.substring(0 , 3)
// console.log(val)

// // slice
// val = fName.slice(-2);

// // charat
// val= lName.charAt(1);


// // split
// val = statement.split('')

// val = sentence.split(' ')

// val = val.indexOf('are')


// // includes
// val = sentence.includes('is')

// // replace
// val = sentence.replace('are', 'is')


// let val;

// val = Math.PI;

// let evaluate;

// // round
// evaluate = Math. round(val)

// //ceil
// evaluate = Math.ceil(val)

// // floor
// evaluate = Math.floor(3.9);

// //sqrt
// evaluate = Math.sqrt(4)

// // abs
// evaluate = Math.abs(-50)

// // pow
// evaluate = Math.pow(7, 4)

// // min
// evaluate = Math.min(2, 6, 84, 4)

// // max
// evaluate = Math.max(2, 6, 84, 4)

// // random
// evaluate = Math.floor(Math.random()*20 +1) ;





// console.log(evaluate)

// const id = '1';

// if(id === 1){
//     console.log(true)
// }else{
//     console.log(false)
// }

// const color= 'amber';

// if(color === 'red'){
//     console.log('Stop')
// }else if(color === 'amber'){
//     console.log('Ready')
// }else if(color === 'green'){
//     console.log('Go')
// }else{
//     console.error('Your color is  not a valid traffic light color')
// }

//     Keyless car program
// let age = + prompt('Welcome to this car. Before you drive, how old are you?');

// if(age < 18){
//     alert('I know your mum says you are a big boy/girl, but you\'re not old enough to drive. Powering off.')
// }else if(age === 18){
//     alert('Congratulations on your first year of driving. Do not crash. Powering on')
// }else if(age > 18  && age<=60){
//     alert('Powering On. Enjoy your drive')
// }else if(age >60){
//     alert('You\'re too old to be driving! Get a driver or something. Powering off')
// }else if(age != typeof age){
//     alert('Enter a valid age please')
// }else{
//     alert('What are you doing here')
// }

// area of a triangle
// const base= parseFloat(prompt('This program helps you calculate the area of a triangle. Enter the value of the base:'));
// const height = parseFloat(prompt('Enter the value of the height:'));
// const area = 0.5 * base * height

// alert(area);

// guessing game
let compGuess = Number(Math.floor(Math.random()* 20 + 1));
let userGuess = Number(prompt('Guessing game. Type a number between 1 and 20'));

if(userGuess === compGuess){
    alert('Correct guess. Well done')
}else if(userGuess > 20){
    alert('Enter a number between 1 and 20, please.')
}else if(userGuess > compGuess){
    alert('Your guess is higher than mine. Try again')
}else if(userGuess < compGuess){
    alert('Your guess is lower than mine. Try again')
}else{
    alert('Enter an actual number')
}





















