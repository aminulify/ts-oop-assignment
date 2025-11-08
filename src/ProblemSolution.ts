 {  // Problem - 01
    // If the boolean is true or not provided, return the string in uppercase.
    // If the boolean is false, return the string in lowercase.

    interface FormatString{
    input: string,
    toUpper?: boolean
 }
 function formatString({input, toUpper}: FormatString): string{
    if(toUpper){
        return input.toUpperCase();
    }
    return input.toLowerCase();
 }
const lowerCased = formatString({input: 'Hello'});
console.log(lowerCased);

const upperCased = formatString({input: 'hello', toUpper: true});
console.log(upperCased);

 }

 { // Problem - 02
   // Create a function that filters an array of objects by the rating property, returning only items with a rating of 4 or more.
    const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];
 // here items and books both are same bcz this is parameter
  function filterByRating(items:{title: string; rating: number}[]){
    const highRatingBooks = items.filter(book => book.rating >= 4);    
    return highRatingBooks;
  }
  const filterData = filterByRating(books);
  console.log(filterData);
 }

 { // Problem - 03
    // Create a generic function that concatenates multiple arrays of the same type using rest parameters. 
    function concatenateArrays<T>(...arrays: T[][]): T[] {
    let result: T[] = [];
    for (const arr of arrays) {
        result = result.concat(arr);
    }
    return result;
    }
    const arrayStringConcatenateResult = concatenateArrays(['a', 'b'], ['c','d'], ['e']);
    console.log("array string concat",arrayStringConcatenateResult)
    const arrayNumberConcatenateResult = concatenateArrays([[1,2], [3,4], [5,6,7]]);
    console.log("array number concat", arrayNumberConcatenateResult);

    // **** IMPORTANT EAXMPLES **** 
    // const arrayNumberConcatenateResult = concatenateArrays([[1,2], [3,4], [5,6,7]]); if get [[],[],[]] double array then use 
    //  console.log("remove one outside array", ...arrayNumberConcatenateResult); // by rest. output [], [], []
    // console.log('flat value', arrayNumberConcatenateResult.flat()); // output [1,2,3,4,5,6,7] like this one array flat values
 }

 { // Problem - 04
   // Create a Vehicle class with private make and year properties and a getInfo() method.
   // Create a Car class extending Vehicle, adding a private model property and a getModel() method. 
    class Vehicle{
        private make: string;
        private year: number;

        constructor(make: string, year: number){
            this.make = make;
            this.year = year;
        }
        getInfo(){
            return `Vehicle Make: ${this.make} and Regis. Year: ${this.year}`
        }
    }

    class Car extends Vehicle{
        private model: number;

        constructor(make: string, year: number, model: number ){
            super(make, year);
            this.model = model;
        }
        getModel(){
            return `Car Model: ${this.model}`
        }
    }
    const myCar = new Car('Toyota', 2021, 2020);
    myCar.getInfo();
    myCar.getModel();
 }

 { // Problem: 05
   // Write a function that takes a string | number and returns:
   // The length if it's a string
   // The number multiplied by 2 if it's a number
   function processValue(value: string | number){
     if(typeof(value) === 'string'){
        return `String Value length: ${value.length}`
     }
     else if(typeof(value) === 'number'){
        return `The number multiplied by 2: ${value * 2}`
     }
   }
   const checkValueString = processValue('Hello World');
   console.log("String Value Return: ",checkValueString);
   const checkValueNumber = processValue(50);
   console.log("Number value return: ",checkValueNumber);

 }

 { // Problem - 06
   // Define an interface Product and create a function to find the product with the highest price in an array. If the array is empty, return null.
   const ProductData = [
    {name: 'iPhone', price: 3200},  
    { name: "Pen", price: 10 },
    {name: 'Laptop', price: 92000},
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
    const noProductAvailable: [] = [];

    interface Product{
        name: string;
        price: number;
    }
    function getMostExpensiveProduct(products: Product[]): Product | null {
        if(products.length === 0){
            return null;
        }

        let mostExpensiveProduct = products[0];
        for(let product of products){
            if(product.price > mostExpensiveProduct.price){
                mostExpensiveProduct = product
            }
        }
        return mostExpensiveProduct;
    }
    const getExpensiveProduct = getMostExpensiveProduct(ProductData);
    console.log("Most expensive product: ",  getExpensiveProduct);
    const ifNoProductAvailable = getMostExpensiveProduct(noProductAvailable);
    console.log("If no product found: ", ifNoProductAvailable) // null === object

 }

 { // Problem: 07 
   // Define an enum Day for the days of the week.
   // Create a function that returns "Weekday" or "Weekend" based on the input day.
    enum Days{
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    function getDayType(day: Days){
        // day === Day.Saturday output 4 === 4 
        if(day === Days.Saturday || day === Days.Sunday){
            return "Weekend";
        }
        return "Weekday";
    }
    const checkFridayType = getDayType(Days.Friday);
    const checkSundayType = getDayType(Days.Sunday);
    console.log("Friday: ",checkFridayType, "Sunday", checkSundayType);

 }

 { // Problem: 08
    // Create an async function that:
    // Returns the square of a number after 1 second
    // Rejects if the number is negative
    async function squareAsync(n: number): Promise<number>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(n<0){
                    return reject(new Error("Negative number not allowed."))
                }
                else{
                    return resolve(n*n);
                }
            },0);
        })
    }
    const negativeNumTest = squareAsync(-2);
    console.log("Negative Number: ",negativeNumTest);
    const positiveNumTest = squareAsync(5);
    console.log("Positive Number: ",positiveNumTest);

 }