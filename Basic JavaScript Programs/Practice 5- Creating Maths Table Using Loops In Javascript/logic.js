let firstNum = parseInt(prompt('Write the number?'))
let times = parseInt(prompt('How much times you want to multiply your number'))
for(let i = 0; i <= times; i ++){
    const multiply = firstNum * i
    console.log(`${firstNum} * ${i} = ${multiply}`)
}

