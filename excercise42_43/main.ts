function show_magician(magician: string[]): void {
    for(const magicians of magician) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}






function make_great(magicians: string[]): void{
    for (let i=0; i< magicians.length; i++) {
        magicians[i] = magicians[i] + 'the great'
    }
}

const magicians2: string[] = ["usman", "habib", "ali"];
make_great(magicians2)









//excercise43




function make_great2(magicians: string[]): string[] {
    const greatmagicians: string[] = [];
    for ( let i=0; i < magicians.length; i++) {
        greatmagicians.push(magicians[i] + ' the great');
    }
    return greatmagicians;
}

const magicians3: string[] = ["usman", "haseeb", "wajahat"];
const greatmagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatmagicians2);














