function hello(name,print){
    print(name);
}

hello('Kawshar',function(name){
        console.log('Hello '+ name);
})

hello('Kmarul Hasan',function(name){
    console.log('length of  '+ name + 'is ' + name.length);
})

//Example Two

var me = {
    name : 'Kawshar',
    age  : 19,
    email : 'kawshar798@gmail.com'
}

function mySelf(persion,callback){
   console.log('persion ' + persion.name + persion.age);
   if(persion.age > 18){
    callback(persion.email);
   }else{
       console.log("age not perfact");
   }
}

mySelf(me,function(email){
    console.log("Mail sent to " + email);
});

//Example three multiple function 
function print(data,callback1,callback2){
    console.log("Original Data is " + data);
    callback1(data);
    callback2(data);
}

print("Hello every body",function(data){
        var uppercase = data.toUpperCase();
        console.log('Uppercase : ' + uppercase);
},function(data){
    var loawercase = data.toLowerCase();
    console.log('loawercase : ' + loawercase);
    console.log('length is ' + loawercase.length);
});

