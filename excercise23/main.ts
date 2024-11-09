let car: string = 'subaru';
//test 1: equality comparison (true)
console.log("is car == ' subaru'? i predict true.");
console.log(car == 'subaru');// true


//test 2: strict equality comparison (true)
console.log("is car === ' subaru'? i predict true.");
console.log(car == 'subaru');// true


//test 3: inequality comparison (false)
console.log("is car != ' subaru'? i predict false.");
console.log(car != 'subaru');// false


//test 4: strict inequality comparison (false)
console.log("is car !== ' subaru'? i predict false.");
console.log(car !== 'subaru');// false
 

//test 5 : less than comparison(false)
console.log("is carv <'subaru'? i predict false.");
console.log(car < 'subaru'); // false (lexicographic comparison)


//test 6 : greater than comparison(false)
console.log("is carv >'subaru'? i predict false.");
console.log(car > 'subaru'); // false (lexicographic comparison)

//test 7: less  than or equal comparison(true)
console.log("is car <= 'subaru'? i predict true.");
console.log(car <= 'subaru'); // true
  

//test 8: greater  than or equal comparison(true)
console.log("is car >= 'subaru'? i predict true.");
console.log(car >= 'subaru'); // true
  
// test 9 : checking truthiness (true)
console.log("is car? i predict true.");
console.log(car);// true (non- empty string is truthy
  
// test 10: checking falseness (false)
console.log("is car? i predict false.");
console.log(car);// false (negation of truthy value)






































