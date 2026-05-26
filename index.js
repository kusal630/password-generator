const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
const withoutNumbers=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
const withoutSymbols=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const withoutNumbersSymbols=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let password1El = document.getElementById('password1')
let password2El = document.getElementById('password2')
let inputEl = document.getElementById("input")
let errorEl = document.getElementById("error")
let maxPasswordLengthEl = document.getElementById("max-password-length")
let minPasswordLengthEl = document.getElementById("min-password-length")
let messageEl = document.getElementById("message")
let toggel1El = document.getElementById("toggle1")
let toggel2El = document.getElementById("toggle2")
let maxPasswordLength = 16
let minPasswordLength = 8

maxPasswordLengthEl.textContent = "Max password length: " + maxPasswordLength + " Characters"
minPasswordLengthEl.textContent = "Min password length: " + minPasswordLength + " Characters"

function randomcharacter(){
    if (toggel1El.checked && toggel2El.checked){
        let randomNumber = Math.floor(Math.random()*characters.length)
        return characters[randomNumber]
    }else if(toggel1El.checked){
        let randomNumber = Math.floor(Math.random()*withoutSymbols.length)
        return withoutSymbols[randomNumber]
    }else if(toggel2El.checked){
        let randomNumber = Math.floor(Math.random()*withoutNumbers.length)
        return withoutNumbers[randomNumber]
    }else{
        let randomNumber = Math.floor(Math.random()*withoutNumbersSymbols.length)
        return withoutNumbersSymbols[randomNumber]
    }
}

function passwordGenerator(){
    let pass = ""
    for (let i=0;i<Number(inputEl.value);++i){
        pass+=randomcharacter()
    }
    return pass;
}

let passwords={
    password1,
    password2
}

function showPassword(){
    if (inputEl.value==="" || Number(inputEl.value)===NaN || Number(inputEl.value)<=0){
        errorEl.textContent = "Enter valid password length"
        password1El.textContent = ""
        password2El.textContent = "" 
        messageEl.textContent = ""
        return
    }else if(Number(inputEl.value)>16){
        errorEl.textContent = "Max limit crossed"
        password1El.textContent = ""
        password2El.textContent = "" 
        messageEl.textContent = ""
        return
    }else if(Number(inputEl.value)<8){
        errorEl.textContent = "Min limit not reached"
        password1El.textContent = ""
        password2El.textContent = "" 
        messageEl.textContent = ""
        return
    }else {
        errorEl.textContent=""
        messageEl.textContent = ""
    }

    passwords.password1 = passwordGenerator()
    passwords.password2 = passwordGenerator()

    password1El.textContent = passwords.password1
    password2El.textContent = passwords.password2

}

function copy1(){
    if (password1El.textContent===""){
        return
    }
    navigator.clipboard.writeText(password1El.textContent)
    messageEl.textContent = "Copied password 1"
}

function copy2(){
    if (password1El.textContent===""){
        return
    }
    navigator.clipboard.writeText(password2El.textContent)
    messageEl.textContent = "Copied password 2"
}