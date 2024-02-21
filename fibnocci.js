function fibonacci(num){
var x=0;
var y=1;
var z=x+y;
var i=0
for (i =2; i< num ; i++){
    z=x+y;
    x=y;
    y=z;
}
return y;

}
var num=7;
answer= fibonacci(num);
console.log("the nth term of the fibonacci series is:", answer);



const num =100;
 let x= 0;
 let y= 1;

 let fn = x+y; 

  console.log(x);
 while( fn < num){
    console.log(fn);

    fn=x+y;
    x=y;
    y=fn;
 }