let text = document.getElementById('text').addEventListener('click', function(e){
    let innerTxt = prompt("Write the text you want to add")
    this.innerHTML = innerTxt
    if(innerTxt == ""){
        alert("Please Write Something")
    }
    this.addEventListener('blur', function(e){
        console.log('blur is blured')
    })
    document.addEventListener('dblclick', function(){
        localStorage.setItem('UpdatedText', innerTxt)
        alert("Congratulations now your text is stored in local Storage")
    })
})





