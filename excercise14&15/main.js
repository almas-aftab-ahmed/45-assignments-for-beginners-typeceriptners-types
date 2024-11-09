"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
var guest_list = ["almas", " aneeqa", "sana", "roma"];
exports.guest_list = guest_list;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected sir/madam" + guest_list[i] + ",\n we invite you on dinner tommorow. \n\nThank you");
}
//excercise 15 starts from here
var not_coming = "almas";
var new_guest = "babar azam";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("respected sir/madam" + guest_list[i] + ",we invited you on dinner tommorow.\nThank you\n");
}
console.log("ms almas, $(not_coming) will not coming tommorow for dinner,");
