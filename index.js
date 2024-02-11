// 1. Write a function that takes 2 numbers and returns -1 if the first is less than the second; 1 – if the first
// more than the second; and 0 – if the numbers are equal.

// function compare(num1, num2){
//     if (num1 < num2) return -1;
//     else if (num1 > num2) return 1;
//     return 0;
// }

// console.log(compare(1,2));
// console.log(compare(2,2));
// console.log(compare(2,1));

// 2. Write a function that calculates the factorial of the number passed to it.

// function findfactorial(num){ // factorial : 3 * 2 * 1
//     let factorial = num;
//     while(--num)
//         factorial *= num;
//     return  factorial;
// }

// console.log(findfactorial(3));
// console.log(findfactorial(4));

// 3. Write a function that takes three separate
// numbers and turns them into one number. For example: numbers
// 1, 4, 9 will turn into the number 149.

// function parseinto(num1, num2, num3){
//     return num1.toString() + num2 + num3;
// }

// console.log(parseinto(1,2,3));
// console.log(parseinto(1,4,9));
// console.log(parseinto(12,43,0));

// 4. Write a function that takes length and width
// rectangle and calculates its area. If in the function
// passed 1 parameter, then it calculates the area of the square.

// function calculatearea(length, width){
//     if (width != undefined) return length * width;
//     return length**2;
// }

// console.log(calculatearea(1, 2));
// console.log(calculatearea(3, 4));
// console.log(calculatearea(2));

// 5. Write a function that checks whether the number passed to it is perfect. A perfect number is
// a number equal to the sum of all its own divisors.

// function checkperfect(num){
//     let copy = num;
//     let sum = 1;
//     while(--num != 1)
//         sum += (copy % num == 0) ? num : 0;

//     return (sum == copy) ? "The number is perfect." : "The number is not perfect.";
// }

// console.log(checkperfect(15));
// console.log(checkperfect(6));

// 6. Write a function that takes the minimum and
// maximum value for the range, and only outputs
// those numbers from the range that are perfect.
// Use the function you wrote earlier to find out
// perfect number or not.


// function findperfects(min, max){
//     let perfects = new Array();

//     while(min++ <= max)
//         if (checkperfect(min) == "The number is perfect.") perfects.push(min);

//     return perfects;
// }

// console.log(findperfects(1,100));

// 7. Write a function that takes the time (hours, minutes, seconds) and displays it on the screen in the format “hh:mm:ss”.
// If the minutes and/or seconds were not present when calling the function
// transmitted, then output them as 00.

// function displayhour(hours, minutes, seconds){
//     if (hours < 10) hours = "0" + hours;
//     else hours = hours.toString();

//     if (minutes == undefined) minutes = "00";
//     else if (minutes < 10) minutes = "0" + minutes;
//     else minutes = minutes.toString();

//     if (seconds == undefined) seconds = "00";
//     else if (seconds < 10) seconds = "0" + seconds;
//     else seconds = seconds.toString();

//     return `${hours}:${minutes}:${seconds}`;
// }

// console.log(displayhour(2,22,45));
// console.log(displayhour(2,22,4));
// console.log(displayhour(2,2,45));
// console.log(displayhour(2,22));
// console.log(displayhour(2));

// 8. Write a function that takes hours, minutes and
// seconds and returns that time in seconds.

// function calculatesecond(hours, minutes, seconds){
//     return hours * 3600 + minutes * 60 + seconds;
// }

// console.log(calculatesecond(1,13,10));
// console.log(calculatesecond(10,1,1));

// 9. Write a function that takes the number of seconds,
// converts them to hours, minutes and seconds and returns them to
// as the string "hh:mm:ss".

// You need to uncomment this task:
//      displayhour         --    Task 7

// function secondtodatetime(second){
//     let hours = Math.round(second / 3600);
//     second -= Math.round(hours * 3600);
//     let minutes = Math.round(second / 60);
//     second -= Math.round(minutes * 60);

//     return displayhour(hours, minutes, second); // displayhour initialized in the task number 7.
// }

// console.log(secondtodatetime(4390)); // These are used in previously task number 8. and equals to 01:13:10
// console.log(secondtodatetime(36061));

// 10. Write a function that calculates the difference between dates.
// The function takes 6 parameters that describe 2
// dates, and returns the result as the string “hh:mm:ss”. At
// to complete the task, use the functions from the previous 2 tasks: first convert both dates to seconds,
// find out the difference in seconds, and then convert the difference
// back to "hh:mm:ss".

// You need to uncomment these tasks:
//      displayhour         --    Task 7
//      calculatesecond     --    Task 8
//      secondtodatetime    --    Task 9


// function calculatedifferencebetweendates(firsthours, firstminutes, firstsecond, secondhours, secondminutes, secondsecond){
//     let firstseconds = calculatesecond(firsthours, firstminutes, firstsecond); // Task 8
//     let secondseconds = calculatesecond(secondhours, secondminutes, secondsecond);
//     let difference = Math.abs(firstseconds - secondseconds);

//     return secondtodatetime(difference); // Task 9
// }

// console.log(calculatedifferencebetweendates(1, 26, 0, 2, 32, 15));

// 11.Create an array "Shopping list". Each element of the array
// is an object that contains the product name, quantity required and purchased or not. Write several functions to work with such an array.
// 1) Display the entire list on the screen in such a way that first
// There were unpurchased products, and then purchased ones.
// 2) Adding a purchase to the list. Please note that when adding
// purchases with a product already existing in the list, it is necessary to increase the quantity in the existing purchase,
// rather than adding a new one.
// 3) Purchasing a product. The function takes the product name
// and marks it as purchased.

// let ShopList = [
//     {
//         "productname": "Macbook M3 Pro 2023",
//         "quantity": 1,
//         "isPurchased": true
//     },
//     {
//         "productname": "Asus Tuf Gaming F17",
//         "quantity": 2,
//         "isPurchased": false
//     }
// ];

// function displaylist(shoplist){
//     var elements = new Array;
//     for (i = 0; i < shoplist.length; i++){
//         if (shoplist[i] == undefined) continue;
//         if (shoplist[i].isPurchased == false){
//             elements.push(shoplist[i]);
//             shoplist[i] = undefined;
//         }
//     };

//     elements.forEach(element => {
//         shoplist.unshift(element);
//     });

//     shoplist.forEach(element => {
//         if (element != undefined)
//             console.log(element);
//     });
//     console.log('\n');
// }

// function addpurchase(shoplist, name, quantitiy, isPurchased){
//     let isExisting = false;
//     shoplist.forEach(element =>{
//         if (element != undefined){
//             if (element.productname == name && element.isPurchased == isPurchased) {
//                 isExisting = true;
//                 element.quantity += quantitiy;
//                 return;
//             }
//         }
//     });
//     if (!isExisting) shoplist.push( { "productname": name, "quantity": quantitiy, "isPurchased": isPurchased } );
// }

// function purchase(shoplist, name){
//     shoplist.forEach(element =>{
//         if (element != undefined){
//             if (element.productname == name)
//                 element.isPurchased = true;
//         }
//     });
// }


// displaylist(ShopList);
// addpurchase(ShopList, "Lenova Thinkpad G20+ 2024", 1, false);
// addpurchase(ShopList, "Macbook M3 Pro 2023", 1, true);
// displaylist(ShopList);
// purchase(ShopList, "Lenova Thinkpad G20+ 2024");
// displaylist(ShopList);

// 12.Create an array describing a receipt in a store. Each element of the array consists of the product name, quantity and price for
// unit of goods. Write the following functions.
// 1) Print out the receipt on the screen.
// 2) Calculation of the total purchase amount.
// 3) Receiving the most expensive purchase in the receipt.
// 4) Calculation of the average cost of one product in a receipt.

// let receipt = [
//     {
//         "productname": "Blade",
//         "quantity":32,
//         "price": 15
//     },
//     {
//         "productname": "Tv",
//         "quantity": 10,
//         "price": 650
//     }
// ];

// function printreceipt(receipt){
//     receipt.forEach(element => {
//         console.log(element);
//     });
// }

// function totalamount(receipt){
//     let total = 0;
//     receipt.forEach(element =>{
//         total += element.quantity * element.price;
//     });
//     return total;
// }

// function mostexpensive(receipt){
//     let max = receipt[0].price;
//     receipt.forEach(element =>{
//         if (element.price > max) max = element.price;
//     });
//     let expensive;
//     receipt.forEach(element => {
//         if (element.price == max) expensive =  element;
//     });
//     return expensive;
// }

// function calculateavarage(receipt){
//     let count = 0;
//     receipt.forEach(element =>{
//         count += element.quantity;
//     });
//     return totalamount(receipt) / count;
// }

// printreceipt(receipt);
// console.log('\n');
// console.log("Total amount is", totalamount(receipt));
// console.log('\n');
// console.log(mostexpensive(receipt));
// console.log('\n');
// console.log(calculateavarage(receipt));

// 13.Create an array of academy audiences. The audience object consists of a name, number of seats (from 10 to 20) and
// the name of the faculty for which it is intended.
// Write several functions to work with it.
// 1) Display all audiences.
// 2) Display the audiences for the specified faculty.
// 3) Display only those audiences that are suitable for
// transferred group. A group object consists of a name,
// number of students and name of faculty.
// 4) Function of sorting audiences by number of seats.
// 5) Function of sorting audiences by name (alphabetically)

// let academy = [
//     {
//         "name": "It Step Academy",
//         "seats": 15,
//         "faculty": "Computer Science"
//     },
//     {
//         "name": "Code Academy",
//         "seats": 10,
//         "faculty": "Computer Science"
//     },
//     {
//         "name": "ISchool Academy",
//         "seats": 20,
//         "faculty": "SAT"
//     }
// ]

// function displayaudiences(academy){
//     academy.forEach(element => {
//         console.log(element);
//     });
// }

// function displayspecificaudiences(academy, faculty){
//     academy.forEach(element => {
//         if (element.faculty == faculty)
//             console.log(element);
//     });
// }

// function displaygroup(academy, name, seats, faculty){
//     academy.forEach(element => {
//         if (element.faculty == faculty && element.name == name && element.seats == seats)
//             console.log(element);
//     });
// }

// function sortbyseats(academy){
//     academy.sort((a, b) => b.seats - a.seats);
//     return academy;
// }

// function sortbyname(academy){
//     academy.sort((a, b) => a.name - b.name);
//     return academy;
// }

// displayaudiences(academy);
// console.log('\n');
// displayspecificaudiences(academy, "Computer Science");
// console.log('\n');
// displaygroup(academy, "It Step Academy", 15, "Computer Science");
// console.log('\n');
// console.log(sortbyseats(academy));
// console.log('\n');
// console.log(sortbyname(academy));