const array=[1,2,3,4,5,6,7,8,9,10];
//I want to create new array by multiplying all elements using 3

const newArray= array.map((num)=>num*3);
console.log(newArray);

const evenArray= array.filter((num)=>num%2===0);
console.log(evenArray);

//if first match found it will return that number
//if no match found then it will return undefined
const found= array.find((num)=>num===19);
console.log(found ? 'Found '+found: 'Not found');

//find index of match (if found then return index of that number)
//if not found then it will return -1
const foundindex= array.findIndex((num)=>num===9);
console.log(foundindex ? 'Found '+foundindex: 'Not found');

//[1,2,3,2,4,5,2,6,7,2,8,2]
//Print individual elements use foreach
array.forEach(num=>console.log(num));

result=[35,67,89,65,94];
console.log(result.every(num=>num>=35));//this for all
console.log(result.some(num=>num>=90)); //for any one or more

console.log([[1,2],2,[3,4,5]].flat())

console.log(array.includes(5)); //check element exist or not
console.log(("Sonam Soni").toLowerCase().indexOf('s'));
console.log("sonam soni".lastIndexOf('s'));

const myarray=[10,20,30,40,50];
console.log(myarray.slice(2));//starts from 2 till last
console.log(myarray.slice(2,4));//starts from 2 till index 3
//let's insert new element in between
//60 between 30 and 40
myarray.splice(3,0,60,70);//start index,delete count,no of elements
console.log(myarray);
//delete 60
myarray.splice(3,1);
console.log('after delete',myarray)
//replace 70 by 35
myarray.splice(3,1,35);
console.log('after replace',myarray)
