function printDate(){
    console.log(`Current Date is ${new Date().getDate()}`);
}

function printMonth(){
    console.log(`Current Month is ${new Date().getMonth()}`);
}

function getBatchInfo(){
    console.log("Californium,W4d4,the Topic for today is Nodejs Module System.");
}

module.exports.date = printDate
module.exports.month = printMonth
module.exports.batch = getBatchInfo