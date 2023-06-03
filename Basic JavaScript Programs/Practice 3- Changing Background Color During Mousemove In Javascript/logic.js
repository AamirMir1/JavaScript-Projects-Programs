let doc = document.addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY)
    document.body.style.backgroundColor = `rgb(${e.offsetX} ${e.offsetY} ${70})`
})