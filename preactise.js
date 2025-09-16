// let obj = {
//      name : 'Nitin',
//      edu :'Btech',
//      prof : 'Engineer'     
// }

// function printDetails(year , place){
//     console.log(`Name of the  person is ${this.name} education is ${this.edu} and  prof is ${this.prof} and born in`, year ,'at' , place   );
// }

// Function.prototype.myCall = function(obj={},...args){
  
//  if( typeof (this) !== 'function' )
//      throw new Error('Not callable')

//   obj.fn = this;
//   obj.fn(...args)

// }

// // printDetails.call(obj, 1998);

// // printDetails.myCall(obj,1997);

// Function.prototype.myApply = function( obj = {} , [...args])
// {
//       if( typeof this !== 'function' ) 
//         throw new Error('Not callable');

//       if( !Array.isArray(args))
//          throw new Error('Not an array')

//       obj.fn=this;

//       obj.fn(...args);
// }


// printDetails.myApply(obj,[1997 , 'Srinagar']);


// Function.prototype.myBind = function(obj={}, ...args1)
// {
//   obj.fn = this

//     return function(...args2 )
//     {
//         obj.fn(...args1,...args2)
//     }
// }


// let ans = printDetails.myBind(obj,1997 );
// ans('Srinagar');



// closure
// let outer = function()
// {
//   let a = 2;
//     return function inner()
//     {
//            a++;
//            console.log(a);
//     }
// }


// let ans = outer();
// ans()
// ans()

class Parent
{
    constructor(name , surname , place )
    {
      this.name  =  name;
        this.surname = surname;
        this.place = place;
    }
    printDetails()
    {
        console.log(`Name of the person is ${this.name} and his surname is ${this.surname} and he was born at ${this.place}`);
    }
}

class Student extends Parent
{
    constructor(name , surname , place ,year)
    {
        super(name , surname , place)
      this.year = year;
    }
}


// let parentobj  = new Parent('Nitin' , 'Joshi' , 'Srinagar' );
// let studentObj = new Student('Amit', 'Sharma', 'Delhi', 1997);
// studentObj.printDetails(); 

// console.log(studentObj)



// let obj = {
//   name : 'Nitin',
//   age : 15,
// }

// function print(city , dob){
// console.log(`My name is ${this.name} and age : ${this.age} and I live in`, city , `from year `, dob  );
// }

// Function.prototype.myBind = function(obj={},...arg1)
// {
//    if( !this === 'function')
//      throw new Error('not callable');

//    obj.fn = this;
  
//    return function(...arg2){
//          obj.fn(...arg1,...arg2)
//    }
// }


// let  answer  = print.myBind(obj, 'Srinagar' );

// answer(1998)

// let arr =  [1,2,3,4,5];

// let print = function(item,index){
//    return item * 4
// }

// Array.prototype.mymap = function( cb ){
   
//     // console.log(this)

//     let ansr = [];

//     for( let i = 0 ; i < this.length ; i++ )
//     {
//       ansr.push(cb(this[i],i , this));
//     }
//      return ansr;
// }

// console.log(arr.mymap(print));


// console.log(heeloow)


