const birthdayCounter = (birthday) => {
    let birthd = new Date(birthday)
    let today = new Date(); // todays date
    let oneDay = 1000*60*60*24 // day in milliseconds

    let ageDays = (today - birthd) / oneDay ;
    ageDays = Math.floor(ageDays);

    console.log(`You have been alive for ${ageDays} days`);

    const nextBDay = new Date(today.getFullYear(), birthd.getMonth(), birthd.getDate());

    let daysTill = (nextBDay - today) / oneDay ;
    daysTill = Math.ceil(daysTill);

    if (daysTill < 0) {
    daysTill = daysTill + 365;
    }; // correction if birthday has passe this year, inaccurate in leap year?

console.log(`It is ${daysTill} until your birthday`);
}

birthdayCounter('22 November 2021');