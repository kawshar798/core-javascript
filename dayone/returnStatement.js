//Return statement
//Example One
function personName(firstname,lastname,gender){

    if(gender === 'male'){
        return ('Mr. '+ firstname + lastname);
    }else{
        return ('Ms. '+ firstname + lastname);
    }
}
var personname = personName("Kawshar"," Ahmed","male");
console.log(personname);

//Exampe two
function object(){
    return {
        name :" Kawshar Ahmed ",
        age  :24,
        info:function(){
            console.log('Name is' + this.name + 'his age is ' + this.age);
        }
    }
}
var obj = object();
console.log(obj);
console.log(obj.info())

//

function rearr(){
    var arr = ['kamal','salim'];
    return arr;
}

var result = rearr();
console.log(result)