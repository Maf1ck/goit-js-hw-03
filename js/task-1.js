const sum = 0;
function makeTransaction(quantity, pricePerDroid) {
    const sum = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${sum} credits!`;
}


console.log(makeTransaction(2, 1000)); 
console.log(makeTransaction(5, 300));  
console.log(makeTransaction(8, 500)); 