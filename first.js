console.log("Hello World")
console.log(10+"10")
console.log("=============================")
// String 
var sub_one = "JavaScript"
var sub_two = "Reactjs"
var sub_three = "Nodejs"
var all_Sub = `${sub_one}<==>${sub_two}<==>${sub_three}`
console.log(all_Sub)
var username = "Admin"
var pass = "Admin123"
var query = `select * from emp where username = '${username}' and pass = '${pass}'`
console.log(query)
console.log("=============================")
//Undefined
var ud;
console.log(ud)
console.log(undefined==undefined) //true
console.log(undefined===undefined)// true
console.log(undefined==null) // true
console.log(undefined===null)//false
console.log("=============================")
//Boolean
console.log(true + true) //2
console.log(1 + true) //2
console.log(1 - true) //0
console.log(1 + false) //1
console.log(false+false) // 0
console.log("1"+true) //1true
console.log("=============================")
//bigint
var bi = 121535535833255591854848542161894616518946516489489949131984897489461659595626626964845215454845136548648664487681515484611315156158915615615615115478878942213559626247383992093893938378483n
console.log(bi)