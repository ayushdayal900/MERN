

//----------------------- object exports

// function add(a , b){
//     return a + b;
// }


// function sub(a , b){
//     return a - b;
// }

// module.exports = {
//     add,
//     sub
// }

//------------------------------ multiple exports
    // func withoud name = anynimous func
exports.add = (a, b) => a+b;
exports.sub = (a, b) => a-b;


// exports functionality depoends on use