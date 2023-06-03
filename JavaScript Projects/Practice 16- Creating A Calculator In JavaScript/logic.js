let screen = document.getElementById('screen')
let buttons = document.querySelectorAll('button')
let screenVal = ''

buttons.forEach((item) => {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        if (buttonText == 'x') {
            buttonText = "*"
            screenVal += buttonText;
            screen.value = screenVal
        }
        else if (buttonText == 'C') {
            screenVal = ""
            screen.value = screenVal;
        }
        else if (buttonText == 'Ce') {
            screenVal = screenVal.slice(0, -1)
            screen.value = screenVal;
        }
        else if (buttonText == "=") {
            screen.value = eval(screenVal)
            screenVal = ""
        } else {
            screenVal += buttonText;
            screen.value = screenVal
        }
    })
})
