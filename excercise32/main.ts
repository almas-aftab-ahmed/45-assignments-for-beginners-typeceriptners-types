let current_users: string[] = ["saba","admin","khan","ramzan","patahn"];
let new_users: string[] = ["noorain","zulqarnain","hasnain","hassan","admin"];


new_users.forEach((newUser) => {
    if(
        current_users.some(
            (curretuser) => curretuser.toLocaleLowerCase() === newUser.toLocaleLowerCase()
        )
    ) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is availible.`);
    }
});

    

