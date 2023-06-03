fetch('fetch.json').then(function (response) {
    return response.json()
}).then(function (data) {
    let html = ``
    data.forEach(element => {
        html += `<div class="card">
                    <img class="image" src="${element.image}" alt="">
                    <h3 class="cardElements" id="name">Name: ${element.name}</h3>
                    <h3 class="cardElements" id="hobby">Hobby: ${element.Hobby}</h3>
                    <h3 class="cardElements" id="email">Email: ${element.email}</h3>
                    <h3 class="cardElements" id="phone">Phone Number: ${element.phone}</h3>
                    <h3 class="cardElements" id="address">Address: ${element.address}</h3>
                 </div>`
                });
                let container = document.getElementById('container')
                container.innerHTML = html
}).catch(function (error) {
    console.log(error)
})