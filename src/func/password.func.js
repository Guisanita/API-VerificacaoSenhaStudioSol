const verifyMinSize = (password, rule) => {
    let verifySize = true;

    if (password.length < rule.value) {
        verifySize = false;
    }

    return verifySize;
}

const verifyMinUppercase = (password, rule) => {
    let verifyUpperCase = true;
    const lettersList = password.split('');
    const upperCaseList = [];

    lettersList.map((letter) => {
        const hasUpper = (letter) => /[A-Z]/.test(letter);
        if (hasUpper(letter)) {
            upperCaseList.push('UpperCase');
        }
    });

    if (upperCaseList.length < rule.value) {
        verifyUpperCase = false;
    }

    return verifyUpperCase;
}

const verifyMinLowercase = (password, rule) => {
    let verifyLowerCase = true;
    const lettersList = password.split('');
    const lowerCaseList = [];

    lettersList.map((letter) => {
        const hasLower = (letter) => /[a-z]/.test(letter);
        if (hasLower(letter)) {
            lowerCaseList.push('LowerCase');
        }
    });

    if (lowerCaseList.length < rule.value) {
        verifyLowerCase = false;
    }

    return verifyLowerCase;
}

const verifyMinDigit = (password, rule) => {
    let verifyDigit = true;
    const lettersList = password.split('');
    const DigitList = [];

    lettersList.map((letter) => {
        if (!isNaN(letter)) {
            DigitList.push('Digit');
        }
    });

    if (DigitList.length < rule.value) {
        verifyDigit = false;
    }

    return verifyDigit;
}

const verifyMinSpecialChars = (password, rule) => {
    let verifySpecialChars = true;
    const lettersList = password.split('');
    const specialCharsList = [];
    let regex = /[!@#$%^&*()-+\\/{}\[\]]/;

    lettersList.map((letter) => {
        if (regex.test(letter)) {
            specialCharsList.push('SpecialChars');
        }
    });

    if (specialCharsList.length < rule.value) {
        verifySpecialChars = false;
    }

    return verifySpecialChars;
}

const verifyMinNoRepeted = (password) => {
    let verifyNoRepeted = true;
    const lettersList = password.split('');
    const NoRepetedList = [];
    let beforeLetter = '';

    lettersList.map((letter) => {
        if (beforeLetter === letter) {
            NoRepetedList.push('NoRepeted');
        }
        beforeLetter = letter;
    });

    if (NoRepetedList.length !== 0) {
        verifyNoRepeted = false;
    }

    return verifyNoRepeted;
}

module.exports = {
    verifyMinSize,
    verifyMinUppercase,
    verifyMinLowercase,
    verifyMinDigit,
    verifyMinSpecialChars,
    verifyMinNoRepeted
}




