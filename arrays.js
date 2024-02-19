const arr1 =[454 , 78878, 8785.5 ,'hello' , true, null];

console.log(arr1);

const fruits = ['apple', 'mango', 'litchi', 'guava','kiwi','orange']

//indexing

console.log(fruits[3]);
console.log(fruits[1]);
console.log(fruits.indexOf('orange'));
console.log(fruits.at(-2));

//slicing

console.log(fruits.slice(1,3) );
console.log(fruits.slice(0));

price ='₹8932.47633';
console.log(price.slice(1));

//adding alements
fruits.push('banana'); //adds element at the end
fruits.unshift('papaya'); //adds element at the begining

console.log(fruits);

//removing elements
fruits.pop(); // removes elements from the end
fruits.shift(); //removes elements from the begining

console.log(fruits);