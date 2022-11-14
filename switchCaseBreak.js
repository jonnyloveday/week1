let time = new Date();
time = time.getHours();
let placeOfWork = 'CodeNation'
let townOfHome = 'Chester'

switch (time) {
    case 8:
    case 9:
        console.log(`I am at the gym in ${townOfHome}`);
        break
    case 10:
    case 11:
        console.log(`I am working at ${placeOfWork}`);
        break
    case 12:
    case 13:
        console.log(`I am on lunch`);
        break
    case 14:
    case 15:
    case 16:
    case 17:
        console.log(`Back at ${placeOfWork}`);
        break
    case 18:
    case 19:
        console.log(`Eatin`);
        break
    case 20:
    case 21:
    case 22:
        console.log(`Drinkin`);
        break
    default:
        console.log(`Sleepin in ${townOfHome}`);
}