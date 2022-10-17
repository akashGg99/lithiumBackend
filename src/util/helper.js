let printDate = function() {
    const currentDate = new Date();
    const date = currentDate.getDate()

    return date  
}

let printMonth = function() {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1 //JS Blunders

    return month
}


let getBatchInfo = function() {
    //let infoObj = {
    // Batch: "Lithium",
    // RunningWeek: "W3D5",
    // ongoingTopic: "Nodejs module system"}
    return "Lithium, W3D5, the topic for today was Nodejs modules."
}




module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo  = getBatchInfo
