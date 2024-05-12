const passwordRange  = document.getElementById("password-range")
const rangeValue = document.getElementById("range-value")
let generator = document.getElementById("password-generator")

let passwordText = document.getElementById("password-text")


let rangeNum;
function rangeBtn() {
    rangeNum = passwordRange.value
    rangeValue.textContent = "Password Length : " + rangeNum
    
    return rangeNum
} 


function generatePassword(){
    
    const Length = rangeNum
    
    let match = true
    
    const includeUppercase = document.getElementById("upper-case").checked
    const includeLowercase = document.getElementById("lower-case").checked
    const includeNumber = document.getElementById("num").checked
    const includeSpacialSymbols = document.getElementById("spacial-characters").checked
    
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


    
    
    if( allowChars.length === 0){
        password = "At least one check box should be checked "
        match = false
        
    }
    
    // if(length===0 ){
    //     password = "SELECT LENGHT THEN PRESS GENERATE"
    //     match = false
    // }
    

    if(match){    
        // password = ""
        for( i=0 ; i<Length; i++){
            let  randomNum = Math.floor(Math.random() * allowChars.length)
            password += allowChars[randomNum]
        }
    }
    passwordText.textContent = password
        
        
    
}




// let num = document.getElementById("num")



// 
// generator.onclick = password
//  console.log(password)