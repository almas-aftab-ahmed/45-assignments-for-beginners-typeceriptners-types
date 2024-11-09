var guest_list = ['ali', 'farhan', 'raza', 'ayesha'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('respected sir/madam' + guest_list[i] + ',\nwe invited you on dinner tommorow.\n\n thank you ');
}
var not_coming = 'farhan';
var new_guest = 'babar azam';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('respected sir\madam' + guest_list[i] + ',\nwe invited you on dinner tommorow.\n\n thank you');
}
guest_list.unshift('shaheen', 'sarfaraz', 'rizwan');
for (var i = 0; i < guest_list.length; i++) {
    console.log('respected sir/madam' + guest_list[i] + ',\nwe invited you on dinner tommorow. we have  found a huge table so  that we have decided to invite 3 more new guests\n\n thank you ');
}
