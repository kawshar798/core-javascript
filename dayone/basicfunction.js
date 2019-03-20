//1.A function Can be stored in Javascript

function sayHello(word){
    return "Kawshar Say "+ word;
}

var hello = sayHello;//here sayHello function reference
var result = hello("hi");
console.log(result);


// 2.A function can be stored in array 

var arr = [1,2,3,4,5];
arr.push(sayHello);
console.log(arr);

// 3.A function can be stroed as an object Field or Property


var person =  {
    name :"Kawshar",
    sayName:sayHello,
    read:function read(){
        console.log(this.name + ' is read');
    }
}
console.log(person)
// 4. We can create function as needed

var sum = 30 + (function(){ return 70})();
console.log(sum);
// 5. we can pass function as an arguments

function wow(greet,fun){
    return fun(greet);
}
console.log(wow('Salam',sayHello));

// 6. We can return function from another function 
function base(b){
    return function(n){
        var result = 1;

        for(var i=0; i<b; i++){
            //console.log(n);
            result *= n;
        }
        return result;
    }
}
var power = base(2)(4);
console.log(power)