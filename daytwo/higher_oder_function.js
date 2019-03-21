//Example One

var arr = ['kawshar','Showrovi','Masud'];
arr.forEach(function(a){

console.log(a)
});

//Example Two

function caller(){
    return function (name){
        return "Caller calling You " + name; 
    }
}
// var a = caller();
// var result = a("Kawshar");
// console.log(result);
var a = caller()("Kawshar");
console.log(a);