var score = 0;
var readlineSync = require("readline-sync");
console.log("Welcome To bookholic application");
var userName = readlineSync.question("Could you please tell me your name?");
// console.log("Welcome" + userName+"!" );
console.log("Welcome" + " " + userName + "!.");
console.log("Let's Start the Quiz !! ");
var q1 = readlineSync.question("Who is the author of Wings of fire?");
// console.log(q1.toUpperCase());
if (q1.toUpperCase() === "APJ ABDUL KALAM") {
  score = score + 1;
  // console.log("KKKKKk")
  console.log("You are Correct !! ")
  console.log("Your Current Score is:" + score);
}
else {
  console.log("OOPs this answer is wrong !! ")
  score = score;
  console.log("Your Current Score is:" + score);

}
var q2 = readlineSync.question("You don't know JS yet is related to which language?");
if (q2.toUpperCase() === "JAVASCRIPT") {
  console.log("You are Correct !! ")
  score = score + 1;
  console.log("Your Current Score is:" + score);
}
else {
  console.log("OOPs this answer is wrong !! ")
  score = score;
  console.log("Your Current Score is:" + score);

}
var q3 = readlineSync.question("Half girlfriend written by?");
if (q3.toUpperCase() === "Chetan Bhagat") {
  console.log("You are Correct !! ")
  score = score + 1;
  console.log("Your Current Score is:" + score);
}
else {
  console.log("OOPs this answer is wrong !! ")
  score = score;
  console.log("Your Current Score is:" + score);

}

var q4 = readlineSync.question("Wings of fire is a romantic love story book?");
if (q4.toUpperCase() === "NO") {
  console.log("You are Correct !! ")
  score = score + 1;
  console.log("Your Current Score is:" + score);
}
else {
  console.log("OOPs this answer is wrong !! ")
  score = score;
  console.log("Your Current Score is:" + score);

}

var q5 = readlineSync.question("Sudha Murthy is a writer?");
if (q5.toUpperCase() === "YES") {
  console.log("You are Correct !! ")
  score = score + 1;
  console.log("Your Current Score is:" + score);
}
else {
  console.log("OOPs this answer is wrong !! ")
  score = score;
  console.log("Your Current Score is:" + score);

}

console.log("______________________________");

console.log("Congratulation " + userName.toUpperCase() + "!!" + "Your Final Score is:" + score);
