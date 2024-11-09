let users : string [] = ['sana','saba','shiza', 'fiza', 'hiba',]

for(let user of users){
    if ( user === "admin"){
        console.log("hello admin, would you like to see a status resport?")
      }


else{
    console.log(`hello ${user}, thank you for logging in again.`)
}
}