// function aa() {
//     console.log("first");
// }
// setTimeout(aa,2000)
// // IIFE

// (function(){
//     console.log("Second");
// })();

// let a =new Function('console.log("constructor;");')
// a()

// let b=()=> {
//     console.log("Third");
// }
// function rollnumber(num) {
//     console.log("Roll number is ",num);

// }
// setTimeout(rollnumber,2000,2021034);
// setTimeout(rollnumber,4000,2021033);

// function aa(){
//     console.log("first")
// }
// setTimeout(aa, 2000);
// //IIFE
// (function(){
//    console.log("second");
// })();
// //asynchronos function isliye kyki phle second wala chala fir first wal chala
// let a = new Function('console.log("constructor");');
// a()

function rollnumber(num,delay,nextroll){
    setTimeout(() => {
        console.log("roll no is",num);
        if (nextroll) nextroll();
    }, delay);
}
rollnumber(112,1000,()=> {
    rollnumber(1213,2000,()=>{
        rollnumber(123,3000,()=>{
            rollnumber(1234,4000,()=>{
    })
})
})
});
//     console.log("Roll no. is ",num);
// }

// setTimeout(rollnumber, 2000, 2200320150026);
// setTimeout(rollnumber, 1000, 2200320150015);

const promise = new Promise(function (resolve, reject) {

    console.log("My first promise")
    resolve("Resolved");
});
promise.then(() => {
    console.log("My first then")
}).catch(() => {
    console.log("My first catch")
})
