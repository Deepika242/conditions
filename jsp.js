let exam=false
if(exam){
    let marks = 'Preparation,revision,practice';
     console.log(marks);
      
} else {
    let noExam = 'Students have to attend to regular classes';
     console.log(noExam);
    
}

let exam1 = true; 
let exam2 = false; 
let exam3 = false; 
if(exam1){
    let Physics = 'Chapters 4,5,6 will be conducted';
    console.log(Physics);
} else if(exam2){
    let maths = 'Chapters 6,7,8 will be conducted';
    console.log(maths);
} else if(exam3){
    let chem = 'Chapters 1,2,3 will be conducted';
    console.log(chem);
} else{
    console.log('there will be holiday to students');
}




//greaterthan 
let num1 = 25;
let num2 = 15;
let comparing = num1 > num2; 
console.log( 'num1 will be grater',comparing);


//lessthan or equal checking
let number1 = 25;
let number2 = 15;
let compare = number1 <= number2 
console.log(  'number1 will be less or equal', compare);


let score = '95'; 
let marks = 95; 

let checkEquals = (score == marks); 
console.log(checkEquals);

let ticket1 = '150'; 
let ticket2 = 150; 
let Comparision = (ticket1 === ticket2 )
console.log(Comparision);


let device1 = 11000; 
let device2 = 15000;
let checkNotEquals = device1 !== device2;
console.log(checkNotEquals);


let moive1 = true;
let moive2 = false;
let seeMoive = moive1 && moive2;
console.log('We enjoy the movie', seeMoive);

let moivee1 = true;
let moivee2 = true;
let seeMoivee = moive1 || moive2;
console.log ('we cannot enjoy the moive',seeMoivee);

