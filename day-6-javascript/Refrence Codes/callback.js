//pass function as argument its called callback

let data=[]
const fetchData=(cb)=>{
    //assume its fetching data from some API
    setTimeout(()=>{
        data=[1,2,3,4,5,6,7];
        console.log("data fecthed successfully");
        cb(); //trigger callback here
    },2000)
}
const displayData=()=>{
    console.log("display function",data);
}
fetchData(displayData)//passing function as argument
//which consider here callback
