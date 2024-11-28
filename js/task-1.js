const sum = 0;
function makeTransaction(quantity, pricePerDroid) {
    const sum = quantity * pricePerDroid;
    console.log(`You ordered ${ quantity }  droids worth  ${sum}  credits!`);
}
makeTransaction(5, 3000);
makeTransaction(3, 1000); // "You ordered 3 droids worth 3000 credits!"
makeTransaction(10, 500);