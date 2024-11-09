function cityCountry(city: string, country : string) {
    return`"${city}, ${country}"`;
}


let city1 = cityCountry("lahore", "pakistan");
let city2 = cityCountry("tokyo", "japan");
let city3 = cityCountry("new york", "usa");

console.log(city1);
console.log(city2);
console.log(city3);