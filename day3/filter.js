var arr = [1,2,3,4,5,6,7,8];
var newArr = [];
for(var i = 0; i<arr.length;i++){
    if(arr[i] % 2 == 1){
         newArr.push(arr[i]);
    }
}
console.log(newArr);

//filer method
newarr = arr.filter(function(item){
           return  item % 2 ==1;

});

console.log(newarr);

///filter implementation 
function myfilter(arr,callback){
    var newArr = [];
    for(var i = 0; i<arr.length;i++){
        if(callback(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
var result = myfilter(arr,function(item){
return item % 2 ==1;
});

console.log(result);

