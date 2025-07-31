const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById("password-1-el")
let password2El = document.getElementById("password-2-el")


function getPasswords() {
    let password1 = ""
    let password2 = ""
    for (let i = 0; i < 15; i++) {
        let index1 = Math.floor(Math.random() * characters.length)
        password1 += characters[index1]
        let index2 = Math.floor(Math.random() * characters.length)
        password2 += characters[index2]
    }
    password1El.textContent = password1
    password2El.textContent = password2
}

function copyOnClick(elementId) {
     const text = document.getElementById(elementId).textContent;

  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  alert("Senha copiada!");
}
