

const pet = {
    petName : 'charlie',
    typeOfPet : 'doggo',
    age : 10,
    colour : 'white',
    features : ['big','spotty','hungry','idiot'],
    eat : false, // has pet eaten
    drink : false, // has pet drank
    hunger  () { 
        if (this.eat == true && this.drink == true) {
            return "ya boy's full";
        } else if (this.eat == false && this.drink == true) {
            return 'thirsty';
        } else if (this.eat == true && this.drink == false) {
            return 'hungry';
        } else if (this.eat == false && this.drink == false) {
            return 'sort it out sharon';
        } else {
            return 'pete tong';
        }
    }
}

console.log(pet.hunger);

// pet.features = ['big','spotty','hungry','idiot']
// pet.eat = true; // has pet eaten
// pet.drink = false; // has pet drank

// hunger  () { if (this.eat == true && this.drink == true) {
//         return "ya boy's full";
//     } else if (this.eat == false && this.drink == true) {
//         return 'thirsty';
//     } else if (this.eat == true && this.drink == false) {
//         return 'hungry';
//     } else if (this.eat == false && this.drink == false) {
//         return 'sort it out sharon';
//     } else {
//         return 'pete tong';
//     }
// }

console.log(pet);

pet.colour = 'white with black spots';
console.log(pet.petName + ' is a ' + pet.colour + ' ' + pet.typeOfPet + ' who is ' + pet.age + ' years old.');
console.log(`my ${pet.typeOfPet} ${pet.petName} is a ${pet.features[2]} ${pet.features[3]} `);

console.log(pet.hunger());