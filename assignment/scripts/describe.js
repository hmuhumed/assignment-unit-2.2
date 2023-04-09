// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We made a variable called number and set it to 1.
// We incremented the number 1 to 2.
// We checked if number is greater or equal to 2. 
// We console.log 'yes'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We made a variable called name and assigned it to Dane.
// We check if the name was the same with exact match only.
// If the name was an ecact match we made it console.log 'Hi, Mary'
//If the name didn't match we made it console.log 'How do you do?'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We created a switch statement and made a vairable called secret.
// We made a varaible called code and gave it a value of 123.
// We created a conditional and checked if code was an exact match of 123 and if it was we would make a new variable called secret and set it to super. If the conditional was true we also made it multiply the value of the variable code by 2.
// We console.log 'super' because code was less than 250. 

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/
 // We made a variable called isStudent and set its value to a boolean which is true. 
 // We made a varibale called age and set it to a value of 34.
 // We made a variable called zip and set it to a value of 55407.
 // We now used compound conditionals. We checked if isStudent was an exact match of true and if zip was greater than 80000. It wouldnt work because the value of zip was not greater than 80000. 
 // We used the else if statement to now check if isStudent is an exact match of our boolean and age is less than 30. We used || to check if either of the statements would be a match to our values. It was not a match to our variables so our console.log wouldnt work. 
 // we now said if isStudent was an exact match of our boolean that we should console.log 'Welcome to Prime!'. It worked and our console.log was displayed.
 // Our last console.log will not be executed because our previous statement was true and got executed. It would only be executed if our previous statement was false. 

 // REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/
// The statement abobe is correct but the instructions asked to also change the the variable colorTwo. The coorect way to do it is below.
// if (mix === true){
//  colorOne = 'Purple'
//  colorTwo = 'Purple'
//}

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/
// We used const so time can't be greater than 4. Correct way to write this code is. We also will change || to && so that both sides must be true. 

// let temp = 40;
// const time = 4;
// if (temp > 39 && time = 4){
// console.log('throw away the food!');
//}

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
// The code looks good but the greater than sign is not correct. We will do that change and the code should be good. 

// let age = 21;
// const minAge = 21;
// if(minAge >= age) {
// console.log('no entry'); 
//} else {
// console.log('enter');
// }



