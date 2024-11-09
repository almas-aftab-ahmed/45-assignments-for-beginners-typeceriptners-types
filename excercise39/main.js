function city_country(city, county) {
    //return`"${city}, ${country}"`
    console.log("\"".concat(city, ", ").concat(county, "\""));
}
city_country("karachi", "pakistan");
var mycities = city_country("karachi", "pakistan");
console.log(mycities);
console.log(city_country("dubai", "uae"));
console.log(city_country("london", "united kingdom"));
console.log(city_country("riyadh", "saudia arabia"));
