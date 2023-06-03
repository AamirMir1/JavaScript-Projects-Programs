
const imgBox = document.querySelector('.imgBox')
let whiteBoxes = document.getElementsByClassName('whitebox')

// Event Listeners for dragable element imgBox

imgBox.addEventListener('dragstart', (e) => {
    console.log("dragstart event is fired")
    e.target.className += " hold"
    setTimeout(() => {
        e.target.className = 'hide'
    }, 0);
})

imgBox.addEventListener('dragend', (e) => {
    console.log('dragend event is fired');
    e.target.className = 'imgBox'
})

for (let whitebox of whiteBoxes) {
    whitebox.addEventListener('dragover', (e) => {
        e.preventDefault()
        console.log("dragover event is fired");
    })
    whitebox.addEventListener('dragenter', (e) => {
        e.target.className += ' dashed'
        console.log("dragenter event is fired");
    })
    whitebox.addEventListener('dragleave', (e) => {
        console.log("dragleave event is fired");
        e.target.className = 'whitebox'
    })
    whitebox.addEventListener('drop', (e) => {
        console.log("drag event is fired");
        e.target.append(imgBox)
        e.target.className = 'whitebox'
    })
}

