const array = [2,5,6,8,9]

console.log(array.reduce((prev, current)=> {
    return prev + current;
}, 0));