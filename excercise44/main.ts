function sandwich(...items: string[]): void{
    console.log("sandwich order:")

    for (let i=0; i< items.length; i++){
        console.log(`-${items[i]}`)
    }
}


console.log("enjoy your sand wich almas aftab")


sandwich('capsicum', 'tomato', 'jalapeno')
sandwich('chiken', ' extra cheese')
sandwich('garlic mayo', 'caramelized onion')





