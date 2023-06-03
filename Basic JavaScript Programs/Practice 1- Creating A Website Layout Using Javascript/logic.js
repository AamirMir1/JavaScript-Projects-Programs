//__ Getting Body ___
let body = document.body;
console.log(body)

// __ Creating A Header Element __
let header = document.createElement('header')
console.log(header)

//__ Creating A Left Header Elements __
let leftSide = document.createElement('div')
let rightSide = document.createElement('nav')
console.log(leftSide)
console.log(rightSide)

// __ Creating Image Element __
let img = document.createElement('img')
img.setAttribute('src', './assets/images/image.jpg')
img.setAttribute('id', 'logoImg')
console.log(img)

//__ Creating List Items ___
let listItem1 = document.createElement('li')
let listItem2 = document.createElement('li')
let listItem3 = document.createElement('li')
let listItem4 = document.createElement('li')
let listItem5 = document.createElement('li')

// __ Creating Anchor Tags __
let anchor1 = document.createElement('a')
let anchor2 = document.createElement('a')
let anchor3 = document.createElement('a')
let anchor4 = document.createElement('a')
let anchor5 = document.createElement('a')

// ___ Creating Text Node ___
let anchor1txt = document.createTextNode('Home')
let anchor2txt = document.createTextNode('Services')
let anchor3txt = document.createTextNode('About Us')
let anchor4txt = document.createTextNode('Contact Us')
let anchor5txt = document.createTextNode('Email Us')

// ___ Appending Elements ___
body.appendChild(header);
header.appendChild(leftSide)
header.appendChild(rightSide)
leftSide.appendChild(img)
rightSide.appendChild(listItem1)
rightSide.appendChild(listItem2)
rightSide.appendChild(listItem3)
rightSide.appendChild(listItem4)
rightSide.appendChild(listItem5)
listItem1.appendChild(anchor1)
listItem2.appendChild(anchor2)
listItem3.appendChild(anchor3)
listItem4.appendChild(anchor4)
listItem5.appendChild(anchor5)
anchor1.appendChild(anchor1txt)
anchor2.appendChild(anchor2txt)
anchor3.appendChild(anchor3txt)
anchor4.appendChild(anchor4txt)
anchor5.appendChild(anchor5txt)

// ___ Styling ____
body.style.margin = '0'
body.style.padding = '0'
header.style.display = 'flex'
header.style.alignItems = 'center'
header.style.margin = 'auto'
header.style.justifyContent = 'space-between'
header.style.backgroundColor = 'rgba(0, 0, 0, 50%)'
header.style.color = 'white'
img.style.width = '50px'
img.style.height = '50px'
img.style.borderRadius = '100%'
img.style.margin = 'auto 10px'
rightSide.style.display = 'flex'
listItem1.style.listStyle = 'none'
listItem2.style.listStyle = 'none'
listItem3.style.listStyle = 'none'
listItem4.style.listStyle = 'none'
listItem5.style.listStyle = 'none'
anchor5.setAttribute('class', 'anchorTags')
anchor1.setAttribute('class', 'anchorTags')
anchor2.setAttribute('class', 'anchorTags')
anchor3.setAttribute('class', 'anchorTags')
anchor4.setAttribute('class', 'anchorTags')
anchor5.setAttribute('class', 'anchorTags')
anchor1.style.padding = '15px 20px'
anchor2.style.padding = '15px 20px'
anchor3.style.padding = '15px 20px'
anchor4.style.padding = '15px 20px'
anchor5.style.padding = '15px 20px'
anchor1.style.cursor = 'pointer'
anchor2.style.cursor = 'pointer'
anchor3.style.cursor = 'pointer'
anchor4.style.cursor = 'pointer'
anchor5.style.cursor = 'pointer'
let section = document.createElement('div')
section.setAttribute('id', 'background')
section.style.background = 'url("./assets/images/image2.jpg") no-repeat center center/cover'
section.style.width = '100vw'
section.style.height = '100vh'
section.style.position = 'absolute'
section.style.top = '0'
section.style.zIndex = '-1'
body.appendChild(section)

console.log(section)

let form = document.createElement('form')
form.setAttribute('action', '#')
body.appendChild(form)
let heading = document.createElement('h1')
let headingTxt = document.createTextNode('Registration Form')
form.appendChild(heading)
heading.appendChild(headingTxt)
let input1 = document.createElement('input')
input1.setAttribute('type', 'text')
input1.setAttribute('placeholder', 'Write Your Name')

let input2 = document.createElement('input')
input2.setAttribute('type', 'text')
input2.setAttribute('placeholder', 'Write Your Address')

let input3 = document.createElement('input')
input3.setAttribute('type', 'text')
input3.setAttribute('placeholder', 'Write Your Contact Number')

let input4 = document.createElement('input')
input4.setAttribute('type', 'text')
input4.setAttribute('placeholder', 'Write Your Gender')

let input5 = document.createElement('input')
input5.setAttribute('type', 'text')
input5.setAttribute('placeholder', 'Write Your Age')

let input6 = document.createElement('input')
input6.setAttribute('type', 'text')
input6.setAttribute('placeholder', 'Write Your Locality')

let input7 = document.createElement('input')
input7.setAttribute('type', 'submit')
input7.setAttribute('value', 'Submit Now')
input7.setAttribute('placeholder', 'Write Your Name')

form.appendChild(input1)
form.appendChild(input2)
form.appendChild(input3)
form.appendChild(input4)
form.appendChild(input5)
form.appendChild(input6)
form.appendChild(input7)

form.style.display = 'flex'
form.style.flexDirection = 'column'
form.style.margin = 'auto'
form.style.width = '50%'


input1.style.background = 'none'
input2.style.background = 'none'
input3.style.background = 'none'
input4.style.background = 'none'
input5.style.background = 'none'
input6.style.background = 'none'
input7.style.background = 'none'

input1.style.margin = '10px'
input2.style.margin = '10px'
input3.style.margin = '10px'
input4.style.margin = '10px'
input5.style.margin = '10px'
input6.style.margin = '10px'
input7.style.margin = '10px'

input1.style.fontSize = '15px'
input2.style.fontSize = '15px'
input3.style.fontSize = '15px'
input4.style.fontSize = '15px'
input5.style.fontSize = '15px'
input6.style.fontSize = '15px'
input7.style.fontSize = '15px'

input1.style.padding = '5px'
input2.style.padding = '5px'
input3.style.padding = '5px'
input4.style.padding = '5px'
input5.style.padding = '5px'
input6.style.padding = '5px'
input7.style.padding = '5px'

input1.style.borderRadius = '5px'
input2.style.borderRadius = '5px'
input3.style.borderRadius = '5px'
input4.style.borderRadius = '5px'
input5.style.borderRadius = '5px'
input6.style.borderRadius = '5px'
input7.style.borderRadius = '5px'

input1.style.backgroundColor = 'white'
input2.style.backgroundColor = 'white'
input3.style.backgroundColor = 'white'
input4.style.backgroundColor = 'white'
input5.style.backgroundColor = 'white'
input6.style.backgroundColor = 'white'
input7.style.backgroundColor = '#0051ff'
input7.style.border = '2px solid blue'
input7.style.cursor = 'pointer'

input1.style.textAlign = 'center'
input2.style.textAlign = 'center'
input3.style.textAlign = 'center'
input4.style.textAlign = 'center'
input5.style.textAlign = 'center'
input6.style.textAlign = 'center'
input7.style.textAlign = 'center'

heading.style.margin = '20px auto'