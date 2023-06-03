// ____________________________ Creating A CV Screener _________________________________

// Fetching JSON Data First
fetch('fetch.json').then((data) => data.json()).then((candidates) => {

    // Creating Iterator
    function candidatesIterator(values) {
        let nextVal = 0
        return {
            next: function () {
                if (nextVal < values.length) {
                    return {
                        value: values[nextVal++],
                        done: false
                    }
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
    let iterate = candidatesIterator(candidates)
    let nextCandidate = iterate.next().value
    let next = document.getElementById('next')

    // Adding Event Listener On Next Button
    next.addEventListener('click', nexting)

    function nexting() {
        nextCandidate = iterate.next().value
        let image = document.getElementById('img')
        let name = document.getElementById('title')
        let details = document.getElementById('details')
        if (nextCandidate != undefined) {
            image.setAttribute('src', `${nextCandidate.image}`)
            name.innerHTML = `<h3>${nextCandidate.name}</h3>`
            details.innerHTML = `<li><strong>Hobby:</strong> ${nextCandidate.Hobby}</li>
                              <li><strong>Email:</strong> ${nextCandidate.email}</li>
                              <li><strong>Phone:</strong> ${nextCandidate.phone}</li>
                              <li><strong>Address:</strong> ${nextCandidate.address}</li>`
        } else {
            alert("Result are finished")
            window.location.reload()
        }
    }
    nexting()

})

