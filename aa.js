let noise = [ 'bang', 'beng', 'bing', 'bong', 'bung'];

noise[3] = 'boom';
// console.log(noise);

let numbers = [0,1,2,3,4,5,6,7,8,9]

function timesTen(num) {
    return num * 10;
}
let xx = numbers.map(timesTen);
//console.log(xx);

numbers.push(42,76);
console.log(numbers);

let mix = ['asd', 4, 'tvg', 99, 'wer', 104, true, false ];
console.log(mix);

console.log(mix.map(timesTen));


//mix.push('leeroy', 'jenkins');
//console.log(mix);

