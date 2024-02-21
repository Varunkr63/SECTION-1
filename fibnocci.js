let [a, b] = [0, 1];
let c = a + b;
console.log(a);
console.log(b);
while (c <= 100) {
    console.log(c);
    [a, b] = [b, c]
    c = a + b;
}



