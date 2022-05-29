console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item) {
  basket.push(item);
 console.log(true);
}
//testing addItem function--should first say 'carrots' and return true. Then it should say 'cucumbers' and return true.
console.log('adding carrots')
addItem('carrots')
//console.log('adding carrots', addItem('carrots'));

console.log(`Basket contains ${basket}`);
console.log('adding cucumbers')
addItem('cucumbers')
console.log(`Basket contains ${basket}`);

function listItems(basket) {
  for (let item of basket) {
    console.log(item)
  }
}
//testing listItem function--should list items in the 'basket' array on
//separate lines. 
//'carrots'
//cucumbers
listItems(basket)

function empty(basket) {
  basket.length = 0; {
    console.log(basket)
  }
}
//testing empty function--should return with an empty array
empty(basket)
listItems(basket)
//testing adding an item back in to make sure that it returns with only that //new item
console.log('adding apples')
addItem('apples');
console.log('Basket contains:');
listItems(basket);
