let car: string = 'subaru';
let age: number = 25;
let number: number[] = [1,2,3,4];





//******string test******


// test 1: equility (true)
console.log("is car == 'subaru? i predict tue.");
console.log(car ==' subaru'); // true (case- insensitive)

//test 2: strict equality (false)
console.log("is cae === 'subaru? i predict false.");
console.log(car === 'subaru'); // false (case-sensitive)



// test 3: inequality(true)
console.log("is car != 'toyota'? i predict true");
console.log(car != 'toyota';);//true



//test 4: inequality(false)
console.log("is car !== 'subaru'? i predict false.");
console.log(car !== 'subaru'); //false (case-sensitive)



//**lower  function test**

//test 5: lower  case conversion(true)
console.log("is car.tolowercase() == 'subaru'? i predict true");
console.log(car.toLowerCase() == 'subaru'); //true (convert to lowercase)





//test 6: lower case conversion (false)
console.log("is car === car.toLowerCase()? i predict false.");
console.log(car === car.toLowerCase()); // false (original value remains uppercase)




//***numerical test ***//

// test 7: equality(true)
console.log("is age == 25? i predict true.");
console.log(age == 25); // true


//test 8: inequality (false)
console.log("is my age != 30? i predict true.");
console.log(age != 30); //true




//test 9: greater than(false)
console.log("is age > 30? i predict false.");
console.log(age > 30); // false


//test 10: less than or equal (true)
console.log("is age <=25? i predict true.");
console.log(age <= 25); //true



//***logical opertors ***//

//test 11: and (true)
console.log("is age > 20 && age <30? i predict true.");
console.log(age > 20 && age < 30); // true (both co ndotion met)


// test 12: oR ( FALSE)
console.log("is age > 30 || age < 18? i predict false.");
console.log(age > 30 || age < 18); // false (neither condition met)




//***array tests***//



// test 13: in array ( true)
console.log("is 3 in numbers? i predict true.");
console.log(3 in number); // true (checks for index existence)


// test 14: not in array (false)
console.log("is 5 not in numbers? i predict false.");
console.log(5 not in number); // true(negation of "in" operators)











