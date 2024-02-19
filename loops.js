for(let i=0; i<10; i++){
    console.log(i);
}
console.log('------');
let nums =[25,4,10,56,85,45,];

for(let i of nums){
console.log(i);
}

console.log('------');

for(let n of nums){
    if(n%2 !==0){
        console.log(n);
    }
}