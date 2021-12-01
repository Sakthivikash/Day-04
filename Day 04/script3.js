//Simple Programs todo for Operators:

//1.Square of a number
let a = 5;
console.log(a*a);//:25

//2.Swapping 2 numbers
let b = 2;
let c = 4;
  d = b;
  b = c;
  c = d;
  console.log(b);//:4
  console.log(c);//:2

//3.Addition of 3 numbers
let e = [1,2,3];
console.log(e[0] + e[1] + e[2]);//:6

//4.Celsius to Fahrenheit conversion
let Celsius = 30;
console.log((((9*Celsius)/ 5)+ 32)+"F");//:86F
//5.Meter to miles
let meter = 2000;
miles = meter * 0.000621371;
console.log(miles+"mile")//:1.24274mile

//6.Pounds to kg
let pound = 10;
kg = pound * 0.453592;
console.log(kg+"kg")//:4.53592kg

//7.Calculate Batting Average
let runs= 60;
let timeout = 30;
let avg = runs / timeout;
console.log("Batting average:"+ avg);//Batting average: 2

//8.Calculate five test scores and print their average
 let scr1 = 40;
 let scr2 = 60;
 let scr3 = 73;
 let scr4 = 45;
 let scr5 = 50;
 let average = (scr1 + scr2 + scr3 + scr4 + scr5)/ 5;
 console.log(average)//:53.6

 //9.Power of any number x ^ y
 let x = 4;
 let y = 2;
 console.log(Math.pow(x,y))//:16

//10.Calculate Simple Interest
let amount = 55000;
let percent = 5;
let year = 2;
let interest = (amount * (percent / 100) * year);
console.log(interest);//:5500

//11.Calculate area of an equilateral triangle
let side = 5;
let area = (1.7320 / 4) * side *side;
console.log (area);//:10.825

//12.Area Of Isosceles Triangle
let base = 3;
let height = 6;
let Area = (base * height) /2;
console.log(Area);//:9

//13.Volume Of Sphere
let radius = 5;
let pi = 3.14;
let volume = ((4/3) * pi * (Math.pow(radius,3)));
console.log(volume)//:523.333

//14.Volume Of Triangular Prism
let plength = 3;
let pbase = 4;
let pheight = 5;
//all values are in cm
console.log((plength * pbase * pheight)/2);//:30

//15.Find area of a triangle.
let tbase = 6;
let theight = 7;
console.log((tbase * theight) / 2);//:21
