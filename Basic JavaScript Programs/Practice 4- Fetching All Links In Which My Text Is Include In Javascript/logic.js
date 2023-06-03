//____________________________________________Exercise-1 WebPage Crawler In Javascript________________________________________

// You have to create a variable which is a string containing the text which is a link you are interested in.

// You have to fetech all the links from a given which contains this text

let text = "code";
let links = document.links;
// console.log(links)

Array.from(links).forEach(element => {                        // You should have to convert your html collection to array to iterate your elements
    let elements = element.href;
    
    if(elements.includes(text)){
        console.log(element, "Your text is available in this link")
    }
});

// let text = "game";
// let links = document.links
// Array.from(links).forEach(element => {
//     let elements = element.innerText
//     // console.log(elements)
//     if(elements.includes(text)){
//         console.log(elements, "Your text is available in this element")
//     }
// });
