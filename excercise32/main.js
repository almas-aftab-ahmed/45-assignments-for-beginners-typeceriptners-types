var current_users = ["saba", "admin", "khan", "ramzan", "patahn"];
var new_users = ["noorain", "zulqarnain", "hasnain", "hassan", "admin"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (curretuser) { return curretuser.toLocaleLowerCase() === newUser.toLocaleLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is availible."));
    }
});
