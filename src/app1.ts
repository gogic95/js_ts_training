let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Aaa';

// userName = userInput; //ne moze

if(typeof userInput === 'string'){  
    userName = userInput;   //prepoznaje sta je pitano gore
}

function generateError (message: string, sifra: number): never{
    throw {message: message, errorCode: sifra};
}

generateError('Error occured!', 505);