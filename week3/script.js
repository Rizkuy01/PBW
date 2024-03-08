let name, phi, price, quantit, emotion

name =  'lorem ipsum dolor sit amet, consectetur adipis'
phi = '3.14'
price = '69'
quantity = '14'
emotion = 'so BOREEEEDDD'


console.log(name)
console.log(phi)
console.log('$',price, 'USD')
console.log(quantity)
console.log("I am feeling ", emotion)

let firstName, lastName

firstName = "Mark"
lastName = "Zuckerberg"

console.log("My future job is one team with " + firstName + " " + lastName);

// operator spread
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
arr = [...[0], ...[1]];
console.log(arr)