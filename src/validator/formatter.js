function trim(){
    let a = "       Hello World"
    console.log(a.trim());
}

function changeToLowerCase(){
    let a = "           Hello World"
    console.log(a.toLowerCase());
}

function changeToUpperCase(){
   let a = "                    Hello World"
   console.log(a.toUpperCase());
    
}


module.exports.trim = trim
module.exports.lower = changeToLowerCase
module.exports.upper = changeToUpperCase