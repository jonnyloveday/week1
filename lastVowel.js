const lastVowelFinder = (str) => {
    str = str.toLowerCase();
    let last = 0;
    let lastA = str.lastIndexOf('a');
    let lastE = str.lastIndexOf('e');
    let lastI = str.lastIndexOf('i');
    let lastO = str.lastIndexOf('o');
    let lastU = str.lastIndexOf('u');

    if (last < lastA) {
        last = lastA;
    }

    if (last < lastE) {
        last = lastE;
    }

    if (last < lastI) {
        last = lastI;
    }

    if (last < lastO) {
        last = lastO;
    }

    if (last < lastU) {
        last = lastU;
    }

    console.log(last);
}

lastVowelFinder('jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi');
lastVowelFinder('Get thee BenidOrm mate');