const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
console.log(characters.length)

let password1El = document.getElementById('password1')
let password2El = document.getElementById('password2')

function randomcharacter(){
    let randomNumber = Math.floor(Math.random()*91)
    return characters[randomNumber]
}
function password1(){
    let pass1 = ""
    for (let i=0;i<=15;++i){
        pass1+=randomcharacter()
    }
    return pass1;
}
function password2(){
    let pass2 = ""
    for (let i=0;i<=15;++i){
        pass2+=randomcharacter()
    }
    return pass2;
}
function showPassword(){
    let pass1 = password1()
    let pass2 = password2()
    password1El.textContent = pass1
    password2El.textContent =pass2
}
