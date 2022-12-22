// const nodemon = require("nodemon");

let data =[
    { _id: "63a2fb3cb9125690e68de490" },
    { _id: "63a2fb82b9125690e68de492" }
  ]
  let a = "63a2fb82b9125690e68de492"

//   for(i=0;i<data.length;i++){

//   }
// console.log(data[0]);
// console.log(data[1]);
for (let i = 0; i < data.length; i++) {
    if(a==data[i]._id){
        console.log(true); 
    }else{
        console.log(false)
    }
    
}