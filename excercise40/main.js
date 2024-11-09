function make_album(artistname, albumtitle) {
    return { artistname: artistname, albumtitle: albumtitle };
}
var album1 = make_album("atif", " tu jane na ");
var album2 = make_album("arigit", "deakha hazaron dafa");
var album3 = make_album("sonu", "tere bin");
console.log(album1);
console.log(album2);
console.log(album3);
function make_album2(artistname, albumtitle, numberoftracks) {
    return { artistname: artistname, albumtitle: albumtitle, numberoftracks: numberoftracks };
}
var album4 = make_album2("atif", " tu jane na ", 30);
var album5 = make_album2("arigit", "deakha hazaron dafa", 55);
var album6 = make_album2("sonu", "tere bin", 40);
console.log(album4);
console.log(album5);
console.log(album6);
