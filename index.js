console.log("   THE QUIZ   ");
console.log("QUIZ is TWO Rounds");
console.log("Each round 3 Questions");
var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your name? ")
console.log("WELCOME TO THE QUIZ  "+userName+"!");
console.log("Note:- Correct Answer : +1,Wrong Answer : -1 ");
var score = 0;
function quiz(question, answer){
var userAnswer = readlineSync.question(question);

if (userAnswer.toUpperCase() === answer.toUpperCase()) {
console.log("correct! ");
score  ++;
}
else{
console.log("wrong! ");
score --;
}
console.log("your score is ",score);
console.log("----------------------");}

console.log("   ROUND 1   ")
var questions = [
  {
    question:"What is the capital of Goa? ",
    answer:"PANAJI"
   },



{
    question:"Who is the india cricket team captain? ",
    answer:"VIRAT KOHILI"
   },
   {
     question:"What is the capital of sikkkim? ",
     answer:"gangtok"
   },

  
];
for(var i=0; i<questions.length; i++){
var currentq = questions[i];
quiz(currentq.question, currentq.answer);
}
console.log("----------------------");
console.log(   "ROUND 2"   )
var questions = [
  {
    question:"Who invented AEROPLANE?  ",
    answer:"WRIGHT BROTHERS"
    },
  {
    question:"Capital of SHIMLA?",
    answer: "MANALI"
  },
  {
    question:"Who is the CM of TELENGANA? ",
    answer:"kcr"
  },
];
for(var i=0; i<questions.length; i++){
var currentq = questions[i];
quiz(currentq.question, currentq.answer);
}
console.log("YOUR FINAL SCORE is " + score);