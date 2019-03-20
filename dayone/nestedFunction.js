//nested function 
function outer(){
    function inner(){
        console.log("Hello! I'm Inner");
    }
    inner();

    console.log("Hello! I'm Outer");
}
outer();

//Exam two

function minicalculat(a,b){
    // for sum
    function sum(){
        return a + b;
    }
    // for subtraction

    function sub(){
        return a - b;
    }
    //for multiple

    function mul(){
        return a * b;
    }
    //for divied
    function div(){
        return a / b;
    }

    return (sum() + sub() + mul()  + div());

}
var result = minicalculat(10,2);
console.log(result);