//scopes
//there are two scopes in Java Script 
//1.Local scopes
//2. Global scopes 

// we can access local variable inside  it's  block 
// we can access global variable  anywhere in it's entire program 


function abc(){
const person="Hello";
console.log(`${person}`);// here we can access local variable because ,it's there inside the block so hence we can access
}
abc();


{
    const person="Hello";
    
}
console.log(`${person}`); //here we can't access , because . it's there in outside of the block so that's the reason we conn't access.


//consider it as function

function Nanjunda(){
    const person="Hello";
    console.log(person);// we can access
    if(true){
        const another="bye";
        console.log(another);  //we can access 
    }
   // console.log(another);//here we cann't access because it there in outside the body.
   for (let i=0;i<5 ;i++)
   {
    console.log(i);
    console.log("Executing......");
   }
   let a=0;
   while(a<6)
   {
    
    console.log(a);
    console.log("while loop ... execution");
    a++;
   }
   let b=0;
   do{
    b++;
    console.log(b);
    console.log("Do while...executing "); //atleast once the body of the code is executed.
  
   } while(b<0); //condition gets fail.
   //console.log("Do while...executing "); it also ecuted code
}
//console.log(`${person}`); //we cann't access , because it's there in the outside the block 
Nanjunda(); //it is the function  calling 



//


      function abc(){
    const  people="Hello people" ;
    console.log(people);
      } 

      function cde (){
        const karan="Hello Karan";
        console.log(karan);
      }


      abc(); //can access
      cde(); // can access


      //global scope 

      const karna="Hello karna";  //global variable 

      function Nanju(){
        const Nanjunda="Hello Nanjunda how are you .?";
        console.log(Nanjunda);
       console.log(karna); // we can access global variable anywhere in the program .
                          // it is afeter execute
      }
      console.log(karna);  // we can acces 
                           // it will execute first ,it is there before function call
      Nanju();


      //another example for global variable 

      const color="Orange "; //low precedence compare to local scope or variable

      function color1() {
        const message ="Hii";

        const color="Red";

        console.log(color); ///it is only executed because local  variable has high precidence than the global variable.

      }
      console.log(color); //execute global scope ,because it is there out of the local scope

      color1();



      /// var v/s let

      
      function start(){
        for(let i=0;i<5;i++)
        {
            console.log(i);  // when we use let ,only execute  whsts there inside   block 
        }
        
      }

      start();

      //another example

       
      function start1(){
        for(var i=0;i<5;i++)
        {                 //var ,when we declare var keyword it execute the outside the block also
            
        }
        console.log(i);  //when you declare console .log outside that is executing the varibale 
      }

      start1();
      

      // var --> function scope, means it execute both inside and out side means[local and globl ]
      //const and let -->block scope , means it execute only block mean [local or block] depends on declaration but var works in the both condition.
       

      var age=25; //window property ,it append window object
    
    let age2=21;// not property of window ,it will not  append.

    var Attr=26;

////////Basic Fundamentals are finished next going to real world of JavaScript.