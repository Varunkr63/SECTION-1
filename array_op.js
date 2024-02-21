const nums =[34, 28 ,100, 29, 35, 77, 38];

for(let i=0; i<nums.length; i++){
    console.log(nums[i]);
}

let sum=0;

for(let i of nums){
    sum+=i;

}
console.log(sum);

console.log('-------');

let sum2 = 0;
nums. forEach( (a,i)=> { sum2 +=a; console.log(i, a);});
console.log(sum2);
console.log('--------');

//get sum of all elements on even index
 
let sum3=0;

nums.forEach((a,i) =>{
    if(i%2===0){
        sum3+= a;
    }
});
console.log(sum3);
console.log('-------');

//cebe of elements in array
for (let i of nums){
    console.log(i**3);
}
console.log('-------');

//wap to add all elements in array

let sum4=0;
for(let i of nums/2);
console.log(sum4);
