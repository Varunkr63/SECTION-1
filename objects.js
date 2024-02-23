const user ={name:'raju', email:'raju@mail.com',password:'123asad'}
console.log(user.name);
console.log(user.email);



console.log(user['password']);

user.password ='xyz123';
console.log([user]);


user.address = 'lucknow';
console.log([user]);


delete user.address;
console.log(user);


console.log(Object.keys(user));
console.log(Object.values(user));


const smartphone ={
    brand:'samsung',
    model:'galaxy m31',
    price:14999,
    color:['blue','black','red'],

};
console.log(smartphone.color);
//index element acsess //length
console.log(smartphone.color[1].length);

smartphone.color[2] ='white';
console.log(smartphone.color);

//replacing element in array
smartphone.color.splice(-1, 1, 'gray');
console.log(smartphone.color);

smartphone.color.push('yellow');
console.log(smartphone.color);



const myphone ={
    brand:'oneplus',
    model:'12',
    varient:{
        '8GB':47000,
        '12GB':56000,
    }
}
console.log(myphone.varient['12GB']);


const phonelist=[
    {brand:'oneplus',model:'12', price:67999},
    {brand:'samsung',model:'m31', price:14999},
    {brand:'IQOO',model:'z7pro', price:27858},
    {brand:'Vivo',model:'v7', price:12999},
];
console.log(phonelist.length);

console.log(phonelist[1].price);
phonelist[phonelist.length-1].model='v9'
console.log(phonelist);

//find sum of all prices
//get models of all smartphone in an array



const sum =phonelist.reduce((accumulator,Object)=>{return accumulator+Object.price;},0)
console.log(sum);




