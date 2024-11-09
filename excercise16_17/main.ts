let guest_list : string [] = ['ali', 'farhan','raza','ayesha'];
//for(let i=0; i<guest_list.length; i++){
   // console.log('respected sir/madam' + guest_list[i] + ',\nwe invited you on dinner tommorow.\n\n thank you ')
//}
let not_coming : string = 'farhan';
let new_guest : string = 'babar azam';
guest_list[1] = new_guest;
//for (let i=0; i<guest_list.length; i++){
  //  console.log('respected sir\madam' + guest_list[i] + ',\nwe invited you on dinner tommorow.\n\n thank you')
//}
guest_list.unshift('shaheen', 'sarfaraz','rizwan');
//for(let i=0; i<guest_list.length; i++){
  //  console.log('respected sir/madam' + guest_list[i] + ',\nwe invited you on dinner tommorow. we have  found a huge table so  that we have decided to invite 3 more new guests\n\n thank you ')
//}

console.log('/unfortunatly we cannot arrange a huge table , only two people allowed.')
     while(guest_list.length>2){
            let remove_guest - guest_list.pop();
            console.log[` sorry sir/madam.${remove_guest} you are not invited for dinner.`];
           }                                                                                                                                                                                                    





           //excercise 17 
           