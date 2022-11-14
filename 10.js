let phrase = 'doing all the codes ';
phrase = phrase.trim();

let i = phrase.length;
let first = phrase.charAt(0);
let last = phrase.charAt(i-1);

if (first == last) {
    console.log(true);
} else {
    console.log(false);
}