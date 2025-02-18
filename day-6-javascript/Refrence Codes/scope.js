let name = "test"; //global variable

function hello() {

    if (true) {
        let a = 10;
        const b = 20;
        var c = 30;

        console.log('Inside if block Let', a)
        console.log('Inside if block Const', b)
        console.log('Inside if block Var', c)
    }
    // console.log('Outside if block Let', a)
    // console.log('Outside if block Const', b)
    console.log('Outside if block Var', c)
}
hello();
function myFunction() {
    let a = 10;
    const b = 20;
    var c = 30;

    console.log('Inside Function Let', a)
    console.log('Inside Function Const', b)
    console.log('Inside Function Var', c)
}
myFunction()
// You can't access functional variables outside the function
//console.log('Out side Function Let', a)
//console.log('Out side Function  Const', b)
//console.log('Out side Function  Var', c)