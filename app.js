const passwordRange  = document.getElementById("password-range")
const rangeValue = document.getElementById("range-value")
let generator = document.getElementById("password-generator")

let passwordText = document.getElementById("password-text")

let rangeNum

passwordRange.onmousemove = function() {
    rangeNum = passwordRange.value
    rangeValue.textContent = rangeNum
}    

 function generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumber, includeSpacialSymbols){
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowercaseChars = "abcdefghijklmnopurstuvwxyz"
    const numberChars = "0123456789"
    const spacialSymbolchars = "!@#$%^&*)(+_}{?><"

    let allowChars = ''
    let password = ''

    allowChars += includeUppercase ? uppercaseChars : ""
    allowChars += includeLowercase ? lowercaseChars : ""
    allowChars += includeNumber ? numberChars : ""
    allowChars += includeSpacialSymbols ? spacialSymbolchars : ""

    if(allowChars.length === 0){
        return "At least one check box should be checked"
    }



    return ''
}




// let num = document.getElementById("num")
const passwordLength = 13 //rangeNum
const includeUppercase = document.getElementById("upper-case").checked
const includeLowercase = document.getElementById("lower-case").checked
const includeNumber = document.getElementById("num").checked
const includeSpacialSymbols = document.getElementById("spacial-characters").checked

generator.onclick = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumber, includeSpacialSymbols)
const password = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumber, includeSpacialSymbols)

passwordText.textContent = password