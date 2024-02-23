const nums =[1, 5, 8, 9, 2, 7];

//find square of all elements in above array

const arr1 = nums.map( (n) => {return n**2} );

console.log(arr1);


const prices =['₹6753.34','₹637.99', '₹777.30', '₹8932.4763'];

console.log(parseInt('₹6753.34'.slice(1)));

const numPrices =prices.map((p) => {return parseInt(p.slice(1))})

console.log(numPrices);

//filter
const prices2 =[23000, 12000, 5000, 7800, 100];

const budgetprices=prices2.filter((p) => {return p>2000 && p<10000});

console.log(budgetprices);

//length of string
const names =['raju', 'chaman','kaliya','chotu'];

const arr4=names.filter((n) => {return n.length>=5});
console.log(arr4);

//even .... not even
const nums2 =[32, 6754, 2345, 876, 123, 872];
const even=nums2.filter((n1)=> {return n1%2===0});
const odd=nums2.filter((n1)=> {return n1%2!==0});
console.log(even);
console.log(odd);


const phonelist=[
    {brand:'oneplus',model:'12', price:67999},
    {brand:'samsung',model:'m31', price:14999},
    {brand:'IQOO',model:'z7pro', price:27858},
    {brand:'Vivo',model:'v7', price:12999},
    {brand:'samsung',model:'s8', price:64000},
];

//find all phones where price is less than 20000
const arr6=phonelist.filter((p) => {return p.price<20000});
const models=phonelist.map((p) => {return p.model});
console.log(arr6);
console.log(models);

const samsungphones=phonelist.filter((p1)=> {return p1.brand==='samsung'})
console.log(samsungphones);













