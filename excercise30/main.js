var users = ['sana', 'saba', 'shiza', 'fiza', 'hiba',];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "admin") {
        console.log("hello admin, would you like to see a status resport?");
    }
    else {
        console.log("hello ".concat(user, ", thank you for logging in again."));
    }
}