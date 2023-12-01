//Using arrow function
// var createCounter = function(n) {
    
//     return () => n++ 
        
// };

//Using Closure
function createCounter(start) {
    let count = start;
    return function() {
        return count++;
    }
}
