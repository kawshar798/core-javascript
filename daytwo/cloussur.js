//Example 1

function clossureDemo(){
    var x = 10;
    return function(){
        var y = 20;
        console.log(x + y);
    }
}
clossureDemo()()