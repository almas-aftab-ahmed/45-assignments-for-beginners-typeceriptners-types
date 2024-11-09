interface item {
    name:string
    price: number

}
//create two objects
const book: item ={
    name: 'twilight'
    price:450

}    

const fruit: item ={
    name: 'dragon fruit'
    price: 800
}
console.log(`book name:${book.name}, price: $${book.price}`)
console.log(`fruit name:${fruit.name}, price: $${fruit.price}`)