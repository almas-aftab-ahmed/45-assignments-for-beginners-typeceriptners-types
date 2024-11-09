function cityCountry(city, country) {
    return "\"".concat(city, ", ").concat(country, "\"");
}
var city1 = cityCountry("lahore", "pakistan");
var city2 = cityCountry("tokyo", "japan");
var city3 = cityCountry("new york", "usa");
console.log(city1);
console.log(city2);
console.log(city3);
