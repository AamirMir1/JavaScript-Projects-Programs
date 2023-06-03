let myText = 'code'
let links = document.links
Array.from(links).forEach(element => {
    if(element.href.includes(myText)){
        console.log(element)
    }
})