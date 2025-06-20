const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const lettersNumbers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
    "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0",
    "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const lettersSymbols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
    "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "~",
    "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]",
    ",", "|", ":", ";", "<", ">", ".", "?", "/"]
const lettersNumbersSymbols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&",
    "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

function render() {
    let boxNum = document.getElementById("box-num")
    let boxNumIsChecked = boxNum.checked
    let boxSym = document.getElementById("box-sym")
    let boxSymIsChecked = boxSym.checked

    let dropdown = document.getElementById("my-dropdown")
    let userLength = dropdown.value

    if (!boxNumIsChecked && !boxSymIsChecked) {
        generate(userLength, letters)
    }
    else if (boxNumIsChecked && !boxSymIsChecked) {
        generate(userLength, lettersNumbers)
    }
    else if (!boxNumIsChecked && boxSymIsChecked) {
        generate(userLength, lettersSymbols)
    }
    else if (boxNumIsChecked && boxSymIsChecked) {
        generate(userLength, lettersNumbersSymbols)
    }
}

function generate(passLength, charArray) {

    let pass1 = ""
    let pass2 = ""

    for (let i = 0; i < passLength; i++) {
        pass1 += charArray[Math.floor(Math.random() * charArray.length)]
        pass2 += charArray[Math.floor(Math.random() * charArray.length)]
    }

    document.getElementById("password-1").textContent = pass1
    document.getElementById("password-2").textContent = pass2
}

let btn1 = document.getElementById("password-1")
let btn2 = document.getElementById("password-2")
let genBtn = document.getElementById("generate-btn")

genBtn.addEventListener('click', () => {
    document.getElementById("copy-text").style.visibility = "visible"
    document.getElementById("password-1").style.visibility = "visible"
    document.getElementById("password-2").style.visibility = "visible"
})

btn1.addEventListener('click', () => {
    btn1.disabled = true
    if (btn1.textContent === "") {
        return
    }
    const textToCopy = btn1.textContent;
    navigator.clipboard.writeText(textToCopy)
    btn1.textContent = 'Copied!';
    setTimeout(() => {
        btn1.disabled = false;
        btn1.textContent = textToCopy;
    }, 2000);
})

btn2.addEventListener('click', () => {
    btn2.disabled = true
    if (btn2.textContent === "") {
        return
    }
    const textToCopy = btn2.textContent;
    navigator.clipboard.writeText(textToCopy)
    btn2.textContent = 'Copied!';
    setTimeout(() => {
        btn2.disabled = false;
        btn2.textContent = textToCopy;
    }, 2000);
})