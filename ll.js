// let even = [];
// let odd = [];
// let wrong = [];

// for (let n = 50; n >= 0; n--) {
//     if (n % 2 == 0 ) {
//         (even.push(n));
//     } else if (n % 2 == 1) {
//         (odd.push(n));
//     } else {
//         (wrong.push(n))
//     }
// }

// console.log(even);
// console.log(odd);
// console.log(wrong);

//dice rolls till 6 occurs

let rollTill6 = [];
let roll = Math.floor(Math.random()*6 + 1)

while (roll != 6) {
    (rollTill6.push(roll));
    roll = Math.floor(Math.random()*6 + 1);
}
//console.log(rollTill6)

//generate 6 numbers to an array
let nums = [];
let ran = Math.floor(Math.random()*100 + 1);
let i = 0;

while (i <= 6) {
    (nums.push(ran));
    ran = Math.floor(Math.random()*100 + 1);
    i++;
}

//console.log(nums);

//div 7 checker
const div7List = () => {
    let div7 = [];
    let notDiv7 =[];
    let rando = Math.floor(Math.random()*30 + 1);
    let a = 0;

    while (a < 6) {
        if (rando % 7 == 0) {
            div7.push(rando)
        } else {
            notDiv7.push(rando);
        };
        a++;
        rando = Math.floor(Math.random()*30 + 1);
    }
    console.log(div7);
    console.log(notDiv7);
}
div7List();

//mutual followers
let bobF = ['a','f','r','j','b','t','p']
let hannahF = ['g','k','w','v','m','a','q','f']

let mutualFollowers = [];
    for (let i = 0; i < bobF.length; i++) {
        for (let j = 0; j < hannahF.length; j++) {
        if (bobF[i] === hannahF[j]) {
            mutualFollowers.push(bobF[i]);
        }
    }
}
  
  console.log(mutualFollowers);