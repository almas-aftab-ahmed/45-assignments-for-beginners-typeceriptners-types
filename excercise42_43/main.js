function show_magician(magician) {
    for (var _i = 0, magician_1 = magician; _i < magician_1.length; _i++) {
        var magicians = magician_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + 'the great';
    }
}
var magicians2 = ["usman", "habib", "ali"];
make_great(magicians2);
