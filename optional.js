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
function my_fun(args1, args2) {
    console.log(args1, args2);
}
//my_fun();  // undefined undefined
//my_fun("Hello1") // Hello1 , undefined
my_fun(null, null);
