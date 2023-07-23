// VARIABLES DECLARATION
let number = 0;
let lengthValue = 8;
let checkCount = 1;
let xMin = 1;
let xMax = 25;
let yMin = 3;
let yMax = 73.5;
let rotation = 0;
let passwordComplexity = 1;
let randomSymbol = ['!', '`', '~', '@', '#', '$', '%', '^', '&', '*', '-', '_', '.', '+'];

// HTML ELEMENT ACCESS
const rangeTracker = document.querySelector('.range-tracker-number');
const dataRangeSlider = document.querySelector('[data-range-slider]');
const rotateArrow = document.querySelector('[rotateArrow]');
const generateButton = document.querySelector('[generateButton]');
const passwordInput = document.querySelector('[passwordInput]');
const passwordCopyButton = document.querySelector('[passwordCopyButton]');
const allCheckBoxes = document.querySelectorAll('input[type=checkbox]');
const numberPassword = document.getElementById('number-password');
const upperCasePassword = document.getElementById('uppercase-password');
const lowerCasePassword = document.getElementById('lowercase-password');
const symbolPassword = document.getElementById('symbol-password');
const passwordStrength = document.querySelector('[passwordStrength]');
const copiedText = document.getElementById('text-copied');

// METHOD TO COPY PASSWORD ON CLIPBORD
const copyPassword = async () => {
    try {
        await navigator.clipboard.writeText(passwordInput.value);
        copiedText.classList.remove('scale-0');
        setTimeout(() => {
            copiedText.classList.add('scale-0');
        }, 1000);
    }
    catch (e) {
        console.log("Password Copying Fail");
    }
};

// METHOD THAT CHECKS THE VALUE OF PASSWORD DISPLAY AND BASSED ON CALLING COPYPASSWORD METHOD
const checkCopyText = () => {
    if (passwordInput.value != '') {
        copyPassword();
    }
}

// METHOD TO GENERATE RANDOM NUMBER
const randomNumber = (min, max) => {
    return (Math.floor((Math.random()) * (max - min)) + min);
}

// METHOD TO GENERATE RANDOM NUMBER BETWEEN 0 TO 9
const randomNumberMethod = () => {
    return randomNumber(0, 10);
}

// METHOD TO GENERATE RANDOM UPPERCASE LETTER
const randomUppercaseLetterMethod = () => {
    return String.fromCharCode(randomNumber(65, 91));
}

// METHOD TO GENERATE RANDOM LOWERCASE LETTER
const randomLowercaseLetterMethod = () => {
    return String.fromCharCode(randomNumber(97, 123));
}

// METHOD TO GENERATE RANDOM SYMBOLS
const randomSymbolsMethod = () => {
    let randomSymbolNumber = randomNumber(0, randomSymbol.length);
    return randomSymbol[randomSymbolNumber];
}

// LOGIC TO MAP LENGTH LABEL WITH SLIDER
const calculate = (x) => {
    return (yMin + (((x - xMin) * (yMax - yMin)) / (xMax - xMin)));
};

// METHOD TO SET SCALE-0 WHEN CLICKS OUTSIDE THE SLIDER
const addScale_0 = () => {
    rangeTracker.classList.add('scale-0');
};

// METHOD TO SET SLIDER VALUE, SET LENGTH NUMBER AND SET LENGTH LABEL SCALE-1
const setValue = () => {
    lengthValue = dataRangeSlider.value;
    rangeTracker.style.setProperty('--number', "'" + lengthValue + "'");
    rangeTracker.style.setProperty('left', (calculate(lengthValue)) + "%")
    rangeTracker.classList.remove('scale-0');
};

// METHOD TO CHECK IF PASSWORD LENGTH VALUE LESS THAN CHECK COUNT THAN IT SET TO EQUAL TO CHECK COUNT
const compareLengthAndCheckCount = () => {
    if (lengthValue < checkCount) {
        dataRangeSlider.value = checkCount;
        setValue();
    }
}

// METHOD TO HANDLE CHECK BOXCOUNT
const checkBoxHandler = () => {
    checkCount = 0;
    allCheckBoxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkCount++;
        }
    });

    if (checkCount == 0) {
        numberPassword.checked = true;
        checkBoxHandler();
    }
    compareLengthAndCheckCount();
}

// MAIN LOGIC TO GENERATE PASSWORD
const passwordInputMethod = () => {

    compareLengthAndCheckCount();

    // now let's find password
    passwordInput.value = '';

    let methodArr = [];
    if (numberPassword.checked) {
        methodArr.push(randomNumberMethod);
    }
    if (upperCasePassword.checked) {
        methodArr.push(randomUppercaseLetterMethod);
    }
    if (lowerCasePassword.checked) {
        methodArr.push(randomLowercaseLetterMethod);
    }
    if (symbolPassword.checked) {
        methodArr.push(randomSymbolsMethod);
    }

    for (let j = 1; j <= (lengthValue); j++) {
        let randomIndex = randomNumber(0, methodArr.length);
        passwordInput.value += methodArr[randomIndex]();
    }
    checkPasswordComplexity();
}

// GENERATE PASSWORD BUTTON CLICK METHOD
const buttonClickEffect = () => {
    passwordInputMethod();
    rotation -= 360;
    rotateArrow.style.setProperty('transform', `rotate(${rotation}deg)`);
};

// CHECK PASSWORD COMPLEXITY METHOD 
function checkPasswordComplexity() {
    if (numberPassword.checked && lengthValue < 8 || numberPassword.checked && upperCasePassword.checked && lengthValue < 4 || numberPassword.checked && lowerCasePassword.checked && lengthValue < 4 || numberPassword.checked && symbolPassword.checked && lengthValue < 4 || upperCasePassword.checked && lowerCasePassword.checked && lengthValue < 4 || upperCasePassword.checked && symbolPassword.checked && lengthValue < 4 || lowerCasePassword.checked && symbolPassword.checked && lengthValue < 4 || upperCasePassword.checked && lengthValue < 8 || lowerCasePassword.checked && lengthValue < 8 || symbolPassword.checked && lengthValue < 8) {
        passwordComplexity = 1;
    }
    if (numberPassword.checked && lengthValue >= 8 || numberPassword.checked && upperCasePassword.checked && lengthValue >= 4 && lengthValue < 8 || numberPassword.checked && lowerCasePassword.checked && lengthValue >= 4 && lengthValue < 8 || numberPassword.checked && symbolPassword.checked && lengthValue >= 4 && lengthValue < 8 || upperCasePassword.checked && lowerCasePassword.checked && lengthValue >= 4 && lengthValue < 8 || upperCasePassword.checked && symbolPassword.checked && lengthValue >= 4 && lengthValue < 8 || lowerCasePassword.checked && symbolPassword.checked && lengthValue >= 4 && lengthValue < 8 || numberPassword.checked && lowerCasePassword.checked && symbolPassword.checked && lengthValue < 4 || numberPassword.checked && upperCasePassword.checked && symbolPassword.checked && lengthValue < 4 || numberPassword.checked && upperCasePassword.checked && lowerCasePassword.checked && lengthValue < 4 || lowerCasePassword.checked && upperCasePassword.checked && symbolPassword.checked && lengthValue < 4 || lowerCasePassword.checked && lengthValue >= 8 || symbolPassword.checked && lengthValue >= 8 || upperCasePassword.checked && lengthValue >= 8) {
        passwordComplexity = 2;
    }
    if (numberPassword.checked && upperCasePassword.checked && lengthValue >= 8 || numberPassword.checked && lowerCasePassword.checked && lengthValue >= 8 || numberPassword.checked && symbolPassword.checked && lengthValue >= 8 || upperCasePassword.checked && lowerCasePassword.checked && lengthValue >= 8 || upperCasePassword.checked && symbolPassword.checked && lengthValue >= 8 || lowerCasePassword.checked && symbolPassword.checked && lengthValue >= 8 || numberPassword.checked && lowerCasePassword.checked && symbolPassword.checked && lengthValue >= 4 && lengthValue < 8 || numberPassword.checked && upperCasePassword.checked && symbolPassword.checked && lengthValue >= 4 && lengthValue < 8 || numberPassword.checked && upperCasePassword.checked && lowerCasePassword.checked && lengthValue >= 4 && lengthValue < 8 || lowerCasePassword.checked && upperCasePassword.checked && symbolPassword.checked && lengthValue >= 4 && lengthValue < 8 || numberPassword.checked && lowerCasePassword.checked && upperCasePassword.checked && symbolPassword.checked && lengthValue >= 4) {
        passwordComplexity = 3;
    }
    if (numberPassword.checked && lowerCasePassword.checked && symbolPassword.checked && lengthValue >= 8 || numberPassword.checked && upperCasePassword.checked && symbolPassword.checked && lengthValue >= 8 || numberPassword.checked && upperCasePassword.checked && lowerCasePassword.checked && lengthValue >= 8 || lowerCasePassword.checked && upperCasePassword.checked && symbolPassword.checked && lengthValue >= 8 || numberPassword.checked && lowerCasePassword.checked && upperCasePassword.checked && symbolPassword.checked && lengthValue >= 6) {
        passwordComplexity = 4;
    }

    passwordStrength.classList.remove('yellowLightAnimation', 'blueLight', 'greenLight', 'redLightAnimation');
    if (passwordComplexity == 1) {
        passwordStrength.classList.add('redLightAnimation');
    }
    else if (passwordComplexity == 2) {
        passwordStrength.classList.add('yellowLightAnimation');
    }
    else if (passwordComplexity == 3) {
        passwordStrength.classList.add('greenLight');
    }
    else if (passwordComplexity == 4) {
        passwordStrength.classList.add('blueLight');
    }
}

// EVENT LISTENER ON PASSWORD COPY BUTTON
passwordCopyButton.addEventListener('click', checkCopyText);

// EVENT LISTENER ON INPUT SLIDER
dataRangeSlider.addEventListener('input', setValue);

// EVENT LISTERNER ON DOCUMENT FOR SET SLIDER LABEL SCALE-0
document.addEventListener('click', addScale_0);

// EVENT LISTENER ON PASSWORD GENERATE BUTTON
generateButton.addEventListener('click', buttonClickEffect);

// EVENT LISTENER ON CHECKBOXES
allCheckBoxes.forEach(checkbox => {
    checkbox.addEventListener('change', checkBoxHandler);
});

// EVENT LISTENER ON COLOR BUTTONS
allColorButtons.forEach(colorBtn => {
    colorBtn.addEventListener('change', changeBgColor);
});