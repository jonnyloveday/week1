let day = 'satuRDay';
day = day.toLowerCase();

switch(day) {
    case 'saturday':
    case 'sunday':
        console.log('lie in')
        break
    default:
        console.log('get up')
}

let topping = 'kale';
topping = topping.toLowerCase()

switch(topping) {
    case 'pepperoni':
    case 'jalepeno':
    case 'pineapple':
        console.log(`get some bacon on your ${topping} pizza`)
        break
    case 'ham':
    case 'chicken':
        console.log(`sort it out, bacon is better than ${topping}`)
        default:
        console.log(`A ${topping} pizza? do better`)
}