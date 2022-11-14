const palindromeString = (word) => {
    let wordA = word.split(" ").join("");
    wordA = wordA.toLowerCase();

    const reverseString = (str) => {
        let splitString = str.split("");
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("");
        return joinArray;
    }

    let backword = reverseString(wordA);

    if (backword == wordA) {
        console.log(`'${word}' is a palindrome`);
    } else {
        console.log(`'${word}' is not palindromic`);
    }
}

const palindromeNumber = (num) => {
    let rev = 0;
    let lastDigit;
    let x = num

    while(x != 0){
	    lastDigit = x % 10;
        rev = rev * 10 + lastDigit;
        x = Math.floor(x/10);
    }

    if (num == rev) {
        console.log(`${num} is palindromic`);
    } else {
        console.log(`${num} aint no palindrome`);
    }

}

const palindrome = (bob) => {
    if ((typeof bob) == 'string') {
        palindromeString(bob);
    } else if ((typeof bob) == 'number') {
        palindromeNumber(bob);
    } else {
        console.log('numbers and strings only fool')
    }    
}

palindrome('Murder for a jar of Red Rum');
palindrome(11223344554432211);
palindrome(true);
