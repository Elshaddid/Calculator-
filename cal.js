/*let player = 'jone';
let point = 144;
let midpoint= 100;
*/
/*
if (point<=midpoint){
    console.log('well done ' +  player);
}
else if (point>=midpoint){
    console.log('you loose ' + player);
}
else{
    console.log('your equale');
}*/

let color ="yellow";

switch(color) {
  case "yellow": 
    console.log("This is blue.");
    break;
  case "red": 
    console.log("This is red.");
    break;
  default: 
    console.log("Color not found.");
}

let choice = "1";
switch(choice){
    case "1":
        console.log("capationo");
        break;
    case "2":
        console.log("milk");
        break;
    default:
        console.log("nonoe");
}
let age = 42;
let isadult = (age>18) ? "too young": "old enough";
console.log(isadult);

//for

for(let i=10; i<=50; i++){
    console.log(i);
}

//even

for(let j=0; j<=20; j+=2){ //when we change ij to 1 it outputs odd numbers
    console.log(j);

}

let x =0;
for(let k=0; k<3; k++){
    x+=k;

}
console.log(x);


let a =0;
while(a<=10){
    console.log(a);
    a++;
}

let b=5;
do{
    console.log("hey");
    b++;
}
while(b<5);


let sum=0; 
for(let i=1; i<7; i++) {
  if (i == 4) {
    continue; 
  }
  sum += i;
}
console.log(sum);

function login(user){
    console.log("hi " + user);
}
let myuser ="bob";
login(myuser);

function discount(purchase){
    if (purchase>=1500){
        purchase*=0.85;
    }
    console.log(purchase);

}
discount(1900);
discount(1200);

function add(x, y){
    return x+y;

}

let result = add(5,8);
console.log(result);