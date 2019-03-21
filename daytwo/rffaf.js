//Javascript Return a Function from Another Function 

function host(){
    console.log("I am host function ");
    return function(){
        console.log("I am chaild function");
    }
}
var host = host();
host()

//Example Two

function greetting(msg){
    return function (name){
            console.log(msg + name);
    }
}

var gret = greetting('Assalamu Alaikum ');
var name = gret('kawshar');
