//Looping conceept in JS

//for loop 

for(let i=0;i<5;i++)
{
    console.log(i);
    console.log("Nanjunda");

}

const Name=["Nanjunda","Charan","Lkhith","Sagar","Deekshi"];
console.log( "length of the array :" +Name.length);
for(let i=0;i<Name.length;i++)
{
    console.log(i);
    console.log( Name[i]);
}

//for in loop

for(Nanjunda in Name){
    console.log(Nanjunda);
}

//while loop 

let i=0;
while(i<15)
{
   console.log(i);
    console.log("Manvitha");
    i=i+1;// or you can use i++ or i+=1.
}

//Do while loop

let a=0;

do{         // The body of the loop ateast execute once ,in the given example i initialized with 0 when it is go to body then increament to 1.

    a++;      //fist execute the body of the loop then it check the condition
    console.log("Nanjunda");
    console.log(a);
}while(a<10) // at the end it will check condition

//for in loop
let val="Hello , World";
val1=val.length;
console.log(val1);

let person1={name1:"Nanjunda",
    name2:"Charan",
    name3:"Likhith",
    name4:"Deekshi",
    name5:"Karthik",

}; //dictionary key and value
console.log(person1);
console.log(person1.length);
for(let i=0;i<person1.length;i++)
{
    console.log(i);
    console.log(person);
}


//for in loop
//for(x in  person) // x will go on each keys
//{
  //  console.log(person[x]); //
//}


//function declaration and expression,

//function means ,you can write once your function()  then call it how many times you want 

//first we need to write function key word then you should write function variable


   function greet( Name,age){    //here Name and age are parameters
         console.log(`hello  ${Name }  well come to function concept ${age}`);                                   //within curly braces text called function body;
    }
       greet( "Nanjunda",21);  //here "Nanjunda" and 21  are the arguements

      function addition(x,y){     //here x,y is the parameters
           return x*y;
    }
    console.log(addition(3,5));
    //another way below
        //let result;
      //result=addition(2,9);  //here 2,9 are arguements
     // console.log(result);

//Function : A block of code designed to perform specific task.
//parameter : A variable in the function definition
//arguments: The actual value passed to the function when it is called .


function greety(firstName="Nanjunda"){
    return  `Hello ${firstName}`; //When you use $ symbol to declare varible inside {} bracket that time you must use backtic key(```````) that is there in the keyboard !1 beside
}                              //here iam passing two 2 arguments in  2 different way ,The output will take Charan "Because the precedence is more than the other means iam declared inside the function variable that is Nanjunda it is low precedene compared to charan argumente"
let val3=greety("Charan ");  //output:Hello Charan ,
console.log(val3);

//function expression 

const nul =function (a,b){
    return a*b;
};
console.log(nul(2,3));


//IIFE=Immmediately invokable function expression
//Immediate invokable function declared within the brackets others wise it diesn't work
(function (){
    console.log("IIFE ran ... "); //IIFE is used to  exceute function cuncurrently 
}) ();


(function (name){
    console.log(`IIFE ran ...${name} `);
}) ("Nanjunda");

const person ={
      getBirthDay:function (){
        return 1995;
      },
      };
      console.log(person.getBirthDay());


//switch statement
const color=prompt("Enter the a color name: ");
switch(color){
    case 'red' :console.log("color is red");
    break;
    case "orange" : console.log("color is orange");
    break;
    case "pink" : console.log("Color s pink");
    break;
    case "white" : console.log("Color is white");
    break;
    case 'red':console.log("Color is red");
    break;
    default : console.log("You entered wrong choice");

}


const dayOfWeak=new Date().getDay();

console.log(`day of weak  : ${dayOfWeak}`);
 
switch(dayOfWeak){

    case 0 :console.log("Sunday");
    break;

    case 1:console.log("Monday");
    break;

    case 2:console.log("Tuesday");
    break;

    case 3:console.log("Wednesday");
    break;

    case 4:console.log("Thursday");
    break;

    case 5:console,log("Friday");
    break;

    case 6:console.log("Saturday");
    break;

   default :console.log("You entered wrong choice");
}






