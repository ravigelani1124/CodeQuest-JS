// In this lesson we'll look at arrays — a neat way of storing a list of data items under a single variable name. 
// Here we look at why this is useful, then explore how to create an array, retrieve, add, and remove items stored in an array, 
// and more besides.

//Learning outcomes:	

// What an array is — a structure that holds a list of variables.
// The syntax of arrays — [a, b, c] and the accessor syntax, myArray[x].
// Modifying array values with myArray[x] = y.
// Array manipulation using common properties and methods such as length, push(), pop(), join(), and split().
// Advanced array methods such as forEach(), map(), and filter().


const shopping = ["Milk", "Curd", "Butter", "Chips", 1,3,5.01, ['Hello','Ravi']];
console.log(shopping)

// You can find out the length of an array (how many items are in it) 
// in exactly the same way as you find out the length (in characters) of a string — by using the length property. Try the following:

console.log(shopping.length) // 8

console.log(shopping[1]) // Curd

shopping[0]="Tahini"

console.log(shopping[0]) // Tahini

console.log(shopping[7][0]) // Hello

console.log(shopping.indexOf("Butter")) // return 2

console.log(shopping.indexOf("Ravi")) // return -1 


// Push method - add item
//To add one or more items to the end of an array we can use push(). 
// Note that you need to include one or more items that you want to add to the end of your array.

let cities = ['surat','ahmedabad'];
cities.push('toronto')
console.log(cities) // [ 'surat', 'ahmedabad', 'toronto' ]

//To add an item to the start of the array, use unshift():

cities.unshift('Waterloo')
console.log(cities) // [ 'Waterloo', 'surat', 'ahmedabad', 'toronto' ]

//Pop method - remove item
//To remove the last item from the array, use pop().
//The pop() method returns the item that was removed.

const removedcities = cities.pop();

console.log(removedcities);  // toronto

//To remove the first item from an array, use shift():

cities.shift();
console.log(cities) // ['surat', 'ahmedabad']

//Very often you will want to access every item in the array. You can do this using the for...of statement:

for (city of cities){
    console.log(city)
}

//You can do this using map()

function double(number){
    return number*2;
}
const numbers = [4,5,6,7,2]
const dobuled = numbers.map(double);

console.log(dobuled) // [ 8, 10, 12, 14, 4 ]

//We give a function to the map(), and map() calls the function once for each item in the array, 
// passing in the item. It then adds the return value from each function call to a new array, 
// and finally returns the new array

//You can do that using filter(). 

//Sometimes you'll want to create a new array containing only the items in the original array that match some test. 
// You can do that using filter(). The code below takes an array of strings and returns 
// an array containing just the strings that are greater than 8 characters long:

function isLong(city) {
    return city.length > 5
}
const longer = cities.filter(isLong)
console.log(longer) // [ 'ahmedabad' ]

//Like map(), we give a function to the filter() method, and filter() calls this function for every item in the array, 
// passing in the item. If the function returns true, then the item is added to a new array. Finally it returns the new array.



//Converting between strings and arrays

//We can use the split() method.

const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

cities = data.split(",");
console.log(cities) //   ['Manchester','London','Liverpool','Birmingham','Leeds','Carlisle']

//You can also go the opposite way using the join() method. Try the following:
const commaSeparated = cities.join(",");
console.log(commaSeparated); // Manchester,London,Liverpool,Birmingham,Leeds,Carlisle

const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
dogNames.toString(); // Rocket,Flash,Bella,Slugger

//With join() you can specify different separators, whereas toString() always uses a comma

