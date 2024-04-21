// Differnce between var and let 
/* 
              var                                               let
    **************************                      *****************************
    1. Break the Scope                              1. Obey the  scope
    2. Global polluting issue                       2. No global polluting issue
    3. allows duplicate values                      3. do not allows duplicate value
    4. variable hoisting issue                      4. no variable hoisting issue 
    5 .ES1                                          5. ES6                          */
    //1. Break the Scope 
    /*for(var i =0;i<5;i++){

    }
    console.log(i) // break the scope // 5
      */
   /* for(let i =0;i<5;i++){

    }
    console.log(i) // error
    */
   
   //2.Global polluting issue
   /*var data = 100;
   // block
   {
    var data = 200; // scope of this should be within the block
   }
   console.log(data) // 100 // 200
   */
   /*let data = 100;
   // block
   {
    let data = 200; 
   }
   console.log(data) // 100 
*/

//3. Allows duplicate values
/*var sub = "java script"
var sub =  "reactjs"
console.log(sub)
*/

//4. variable hoisting
//console.log(data)// error // undefined
//var data = 100 

//console.log(data) // error
//let data = 100




//Const keyword

//const data = 100
//data = 200
//console.log(data) // Error cant change the const value

const arr = [1,2,3,4,5]
//arr = []
//arr

arr[2] = 100
arr[3] = 200

arr.pop(); // removes the last element
console.log(arr)
arr.shift(); // removes the first element
console.log(arr)

// Typof
console.log(typeof("Hello")) // String
console.log(typeof(undefined)) // undefined
console.log(typeof(56))//number
console.log(typeof(null))//object


//Symbol (Used for security)
let data = 100;
console.log(data) //100

let data2 = Symbol(200)
console.log(data2)

// Json object
const obj = {
   "sub_one":"JavaScript"
   ,"sub_two":"mongoDB"
}
//obj = {} //TypeError: Assignment to constant variable.
console.log(obj)
obj.sub_one = "Reactjs"
console.log(obj)