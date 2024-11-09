function make_album(artistname: string, albumtitle: string){
    return{artistname, albumtitle}
}

let album1 = make_album("atif", " tu jane na ");
let album2 = make_album("arigit", "deakha hazaron dafa");
let album3 = make_album("sonu", "tere bin");

console.log(album1);
console.log(album2);
console.log(album3);















function make_album2(artistname: string, albumtitle: string, numberoftracks?:number){
    return{artistname, albumtitle, numberoftracks}
}

let album4 = make_album2("atif", " tu jane na ", 30);
let album5 = make_album2("arigit", "deakha hazaron dafa",55);
let album6 = make_album2("sonu", "tere bin",40);

console.log(album4);
console.log(album5);
console.log(album6);















































