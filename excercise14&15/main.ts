let guest_list : string [] = [`almas`, ` aneeqa`, `sana`,`roma`];
for(let i=0; i<guest_list.length; i++){
    console.log(`Respected sir/madam` +  guest_list[i] + `,\n we invite you on dinner tommorow. \n\nThank you`)}

export{guest_list}
     //excercise 15 starts from here
let not_coming :  string = `almas`;
let new_guest : string = `babar azam` 
guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log(`respected sir/madam` + guest_list[i] + `,\we invited you on dinner tommorow.\nThank you\n`)

}

console.log(`ms almas, $(not_coming) will not coming tommorow for dinner,`)