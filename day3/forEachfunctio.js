var arr = [1,2,3,4,5,6,7,8];

arr.forEach(function(element,i,arr){
console.log('Element is '+ element ,"index is " + i,arr);
});

//Implementation foreachFunction 

function loop(arr,callback){
    for(var i = 0; i<arr.length;i++){
        callback(arr[i],i);
    }
}
loop(arr,function(id,index){
console.log("element is " + id,"index is " + index)
});