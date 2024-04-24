/*                           Optional Parameters in Function
                             *******************************
                    1.While Calling the function we can make few parameters as Optional.
                    2.This concept is introduced in ES6.
                    3.Optional parameters are represented with "?".
                    4.Optional parameters will work in Typescript.
                    5.Superset of javascript is Typescripyt.
                    6.We will save typescript file with ".ts" extension.
                    7.Typescript follows "OOPs"
                    8.Typescript is a programming langauge.
                    9.Browsers won't understand typescript.
                    10.So we need to convert typescript to equalent javascript.
                    11.Conversion of typescript to equalent javascrpit is called "Transpilation"



                                  Intallation of Typescript
                                  *************************
                        =>npm intall -g typescript



                                        Transpilation
                                        *************
                        => tsc demo.ts
                        =>node demo.js
*/
/*function my_fun(args1?:String , args2?:String):void{
    console.log(args1,args2)
}*/
//my_fun();  // undefined undefined
//my_fun("Hello1") // Hello1 , undefined
//my_fun(null,null) // null null
/*function my_fun(args1 , args2?:String):void{
    console.log(args1, args2)
}
//my_fun();  // Error Excepted one argument but got zero
my_fun("Hello2")   //undefined Hello2
*/
function my_fun(args1, args2, args3) {
    if (args2 === void 0) { args2 = "Hello2"; }
    var args4 = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        args4[_i - 3] = arguments[_i];
    }
    console.log(args1, args2, args3, args4);
}
//my_fun(undefined , undefined , undefined)  // undefined , Hello2 , [undefined]
//my_fun("Hello1")  // Hello1 Hello2 undefined , []
my_fun(null, null, null, null); // null , Hello2 , null , [null]
