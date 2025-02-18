console.log(greeting('John Doe'))
data()
function greeting(name){
    return 'Welcome '+name;
}
function print(){
    console.log('Hello World');
}
function cube(n){
    return n*n*n;
}
//Function Expression
const data= function(){
    console.log('Data Fetched successfully')
}
print();
const result= greeting('Sonam Soni'); //store result in variable
console.log(result);
console.log('Cube of 5 ',cube(5));//call function directly in console