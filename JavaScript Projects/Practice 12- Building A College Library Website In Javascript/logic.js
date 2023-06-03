// // // // // ________________________________________ Project 2- Building A College Library Website In Javascript __________________________________________

// // // // // Constructor

// // // // function Book(name, author, type) {
// // // //     this.name = name;
// // // //     this.author = author;
// // // //     this.type = type;
// // // // }

// // // // // Display Constructor

// // // // function Display() {

// // // // }

// // // // // Add methods to display prototype

// // // // Display.prototype.add = function (book) {
// // // //     console.log("Adding UI")
// // // //     let tableBody = document.getElementById('tBody');
// // // //     let uiString = `<tr>
// // // //                        <td>${book.name}</td>
// // // //                        <td>${book.author}</td>
// // // //                        <td>${book.type}</td>
// // // //                     </tr>`
// // // //     tableBody.innerHTML += uiString
// // // // }

// // // // // Implement the clear function

// // // // Display.prototype.clear = function () {
// // // //     let libraryForm = document.getElementById('libraryForm');
// // // //     libraryForm.reset()
// // // // }

// // // // // Implement the validate function

// // // // Display.prototype.validate = function (book) {
// // // //     if (book.name.length < 2 || book.author.length < 2) {
// // // //         return false;
// // // //     }
// // // //     else {
// // // //         return true;
// // // //     }
// // // // }

// // // // // Implement the alert

// // // // Display.prototype.show = function (type, showMessage, type2) {
// // // //     let message = document.getElementById('message');
// // // //     message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
// // // //                               <strong>${type2}</strong> ${showMessage}
// // // //                          </div>`
// // // //     setTimeout(() => {
// // // //        message.innerHTML = "" 
// // // //     }, 3000);
// // // // }

// // // // // Add submit event listener to prototype

// // // // let libraryForm = document.getElementById('libraryForm');
// // // // libraryForm.addEventListener('submit', libraryFormSubmit);
// // // // function libraryFormSubmit(e) {
// // // //     e.preventDefault()
// // // //     let name = document.getElementById('bookName').value
// // // //     let author = document.getElementById('author').value
// // // //     let type;

// // // //     //  fiction, programming, cooking

// // // //     let fiction = document.getElementById('fiction')
// // // //     let programming = document.getElementById('programming')
// // // //     let cooking = document.getElementById('cooking')

// // // //     if (fiction.checked) {
// // // //         type = fiction.value
// // // //     }
// // // //     else if (programming.checked) {
// // // //         type = programming.value
// // // //     }
// // // //     else if (cooking.checked) {
// // // //         type = cooking.value
// // // //     }
// // // //     let book = new Book(name, author, type)
// // // //     console.log(book)

// // // //     let display = new Display()
// // // //     if (display.validate(book)) {
// // // //         display.add(book);
// // // //         display.clear();
// // // //         display.show('success', 'You books are added in list', 'Success')
// // // //     }
// // // //     else {
// // // //         display.show('danger', `You can't add your books`, 'Error')
// // // //     }

// // // // }

// // // // // Quick Quiz 
// // // // /*
// // // // 1: Store all the data to the local storage
// // // // 2: Given another column as an option to delete the book
// // // // 3: Add a scroll bar to the view
// // // // */






// // // bookss()
// // // // Constructor
// // // function Books(name, author, type) {
// // //     this.name = name;
// // //     this.author = author;
// // //     this.type = type;
// // // }

// // // // Display Constructor

// // // function Display() {

// // // }



// // // // Methods to display in prototype

// // // // Implement books in UI
// // // Display.prototype.add = function (books) {
// // //     let myBook = localStorage.getItem('myBook')
// // //     let myObj;
// // //     if (myBook == null) {
// // //         myObj = []
// // //     } else {
// // //         myObj = JSON.parse(myBook)
// // //     }
// // //     let object = {
// // //         myName: books.name,
// // //         myAuthor: books.author,
// // //         myType: books.type
// // //     }
// // //     myObj.push(object)
// // //     localStorage.setItem('myBook', JSON.stringify(myObj))
// // //     console.log(myObj)
// // //     bookss()
// // // }
// // // function bookss() {
// // //     let myBook = localStorage.getItem('myBook')
// // //     let myObj;
// // //     if (myBook == null) {
// // //         myObj = []
// // //     } else {
// // //         myObj = JSON.parse(myBook)
// // //     }
// // //     myObj.forEach(element => {
// // //         let html = ``
// // //         html += `<tr>
// // //                     <td>${element.myName}</td>
// // //                     <td>${element.myAuthor}</td>
// // //                     <td>${element.myType}</td>
// // //                  </tr>`
// // //         let booksInUI = document.getElementById('tBody');
// // //         if (myObj.length != 0) {
// // //             booksInUI.innerHTML += html
// // //         } else {
// // //             booksInUI.innerHTML = `Nothing to show! please add a note`
// // //         }
// // //     });
// // // }


// // // // Implement a clear function for form

// // // Display.prototype.clear = function () {
// // //     let form = document.getElementById('libraryForm');
// // //     form.reset()
// // // }

// // // // Implement a validate function

// // // Display.prototype.validate = function (books) {
// // //     if (books.name.length < 2 || books.author.length < 2) {
// // //         return false;
// // //     }
// // //     else {
// // //         return true;
// // //     }
// // // }

// // // // Implement alert function

// // // Display.prototype.show = function (setAlert, message, type) {
// // //     let msg = document.getElementById('message')
// // //     let alert = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
// // //                     <strong>${setAlert}</strong> ${message}
// // //                  </div>`
// // //     msg.innerHTML = alert
// // //     setTimeout(() => {
// // //         msg.innerHTML = ""
// // //     }, 3000);
// // // }


// // // // Add event listener to form

// // // let form = document.getElementById('libraryForm');
// // // form.addEventListener('submit', libraryFormSubmit)
// // // function libraryFormSubmit(e) {
// // //     e.preventDefault()
// // //     let name = document.getElementById('bookName').value;
// // //     let author = document.getElementById('author').value;
// // //     let type;
// // //     let fiction = document.getElementById('fiction')
// // //     let programming = document.getElementById('programming')
// // //     let cooking = document.getElementById('cooking')

// // //     if (fiction.checked) {
// // //         type = fiction.value;
// // //     }
// // //     else if (programming.checked) {
// // //         type = programming.value;
// // //     }
// // //     else if (cooking.checked) {
// // //         type = cooking.value
// // //     }
// // //     let books = new Books(name, author, type)
// // //     console.log(books)
// // //     let display = new Display();
// // //     if (display.validate(books)) {
// // //         display.add(books)
// // //         display.clear()
// // //         display.show('Congratulations!', 'Your book is added in list', 'success')
// // //     }
// // //     else {
// // //         display.show('Error!', `You can't add a invalid book`, 'danger')
// // //     }
// // // }

















// // Project Using ES6 Classes //
// class Books {
//     constructor(name, author, type) {

//     }
// }

// class Display {
//     add() {
//         let myBooks = localStorage.getItem('myBooks')
//         let myObj;
//         if (myBooks == null) {
//             myObj = []
//         }
//         else {
//             myObj = JSON.parse(myBooks)
//         }
//         myObj.forEach(element => {
//             let booksParent = document.getElementById('tBody')
//             let html = ``
//             html += `<tr>
//                         <td>${element.bookName}</td>
//                         <td>${element.bookAuthor}</td>
//                         <td>${element.bookType}</td>
//                         <td><button style="border: none; color: white; background-color: lightcoral; border-radius: 5px; cursor: pointer;">Delete</button></td>
//                      </tr>`

//             booksParent.innerHTML += html;
//         });
//     }
// }




// // Adding a submit event listener to form
// let form = document.getElementById('libraryForm')
// form.addEventListener('submit', formSubmit);
// function formSubmit(e) {
//     e.preventDefault()
//     let name = document.getElementById('bookName').value;
//     let author = document.getElementById('author').value;
//     let type;

//     let fiction = document.getElementById('fiction')
//     let programming = document.getElementById('programming')
//     let cooking = document.getElementById('cooking')

//     if (fiction.checked) {
//         type = fiction.value;
//     }
//     else if (programming.checked) {
//         type = programming.value;
//     }
//     else if (cooking.checked) {
//         type = cooking.value;
//     }

//     let myBooks = localStorage.getItem('myBooks')
//     let myObj;
//     if (myBooks == null) {
//         myObj = []
//     }
//     else {
//         myObj = JSON.parse(myBooks)
//     }
//     let booksObj = {
//         bookName: name,
//         bookAuthor: author,
//         bookType: type
//     }
//     console.log(booksObj.bookAuthor)
//     myObj.push(booksObj)
//     localStorage.setItem('myBooks', JSON.stringify(myObj))
//     let books = new Books(booksObj.bookName, booksObj.bookAuthor, booksObj.bookType)
//     console.log(books)
//     let display = new Display();
//     display.add()
// }






























































// // // // // Constructor
// // // // function myBooks(name, author, type) {
// // // //     this.name = name;
// // // //     this.author = author;
// // // //     this.type = type
// // // // }



// // // // // Display Constructor
// // // // function Display() {

// // // // }



// // // // // Add methods to display prototype

// // // // Display.prototype.add = function (arrangeBooks) {
// // // //     let tableBody = document.getElementById('tBody')
// // // //     let tableUI = `<tr>
// // // //                    <td>${arrangeBooks.name}</td>
// // // //                    <td>${arrangeBooks.author}</td>
// // // //                    <td>${arrangeBooks.type}</td>
// // // //                 </tr>`
// // // //     tableBody.innerHTML += tableUI
// // // // }
// // // // Display.prototype.clear = function () {
// // // //     let Form = document.getElementById('libraryForm')
// // // //     Form.reset()
// // // // }


// // // // // Add submit event listener to form

// // // // let Form = document.getElementById('libraryForm')
// // // // Form.addEventListener('submit', libraryForm);
// // // // function libraryForm(e) {
// // // //     e.preventDefault()
// // // //     let name = document.getElementById('bookName').value;
// // // //     let author = document.getElementById('author').value;
// // // //     let fiction = document.getElementById('fiction')
// // // //     let programming = document.getElementById('programming')
// // // //     let cooking = document.getElementById('cooking')

// // // //     if (fiction.checked) {
// // // //         type = fiction.value
// // // //     }
// // // //     else if (programming.checked) {
// // // //         type = programming.value
// // // //     }
// // // //     else if (cooking.checked) {
// // // //         type = cooking.value
// // // //     }
// // // //     let arrangeBooks = new myBooks(name, author, type)
// // // //     console.log(arrangeBooks)

// // // //     let display = new Display()
// // // //     display.add(arrangeBooks)
// // // //     display.clear()
// // // // }






// // // Constructor
// // bookss()
// // function myBooks(name, author, type) {
// //     this.name = name;
// //     this.author = author;
// //     this.type = type;
// // }

// // // Display Constructor

// // function Display() {

// // }

// // // Method to add books in UI
// // Display.prototype.add = function (yourBooks) {
// //     let myNotes = localStorage.getItem('myNotes')
// //     let myObj;
// //     if (myNotes == null) {
// //         myObj = []
// //     }
// //     else {
// //         myObj = JSON.parse(myNotes)
// //     }
// //     let booksObj = {
// //         bookName: yourBooks.name,
// //         bookAuthor: yourBooks.author,
// //         bookType: yourBooks.type
// //     }
// //     myObj.push(booksObj)
// //     localStorage.setItem('myNotes', JSON.stringify(myObj))
// //     console.log(myObj)
// //     bookss()
// // }

// // // Function to add books from local Storage

// // function bookss() {
// //     let myNotes = localStorage.getItem('myNotes')
// //     if (myNotes == null) {
// //         myObj = []
// //     }
// //     else {
// //         myObj = JSON.parse(myNotes)
// //     }
// //     myObj.forEach(function(element, index) {
// //         let tableBody = document.getElementById('tBody')
// //         let books = ``
// //         books = `<tr>
// //                     <td>${element.bookName}</td>
// //                     <td>${element.bookAuthor}</td>
// //                     <td>${element.bookType}</td>
// //                     <td><button style="border: none; color: white; background-color: lightcoral; border-radius: 5px; cursor: pointer;">Delete ${index + 1}</button></td>
// //                 </tr>`
// //         if (myObj.length != 0) {
// //             tableBody.innerHTML += books
// //         }
// //         else {
// //             tableBody.innerText = 'Nothing to show please add a book'
// //         }
// //     });
// // }

// // // Function to delete books




// // // Methods to add in prototype



// // // Adding a submit event listener to form

// // let form = document.getElementById('libraryForm')
// // form.addEventListener('submit', booksSubmit)
// // function booksSubmit(e) {
// //     e.preventDefault()       // This function will not submit your form
// //     let name = document.getElementById('bookName').value;
// //     let author = document.getElementById('author').value;
// //     let type;
// //     let fiction = document.getElementById('fiction')
// //     let programming = document.getElementById('programming')
// //     let cooking = document.getElementById('cooking')
// //     if (fiction.checked) {
// //         type = fiction.value
// //     }
// //     else if (programming.checked) {
// //         type = programming.value
// //     }
// //     else if (cooking.checked) {
// //         type = cooking.value
// //     }
// //     let yourBooks = new myBooks(name, author, type)
// //     let display = new Display()
// //     display.add(yourBooks)
// // }































// Class for books
class Books {
    constructor(name, author, type) {
        this.name = name,
            this.author = author,
            this.type = type
    }
}

// Class to display books

class Display {
    addBooks() {
        addingBooks()
    }
    clear() {
        let form = document.getElementById('libraryForm')
        form.reset()
    }
    alerts(text, message, type) {
        let msg = document.getElementById('message')
        let messaged = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>${text}</strong> ${message}
                     </div>`
        msg.innerHTML = messaged
    }
}


// Adding a event listener to form
addingBooks()
let form = document.getElementById('libraryForm')
form.addEventListener('submit', submitForm)
function submitForm(e) {
    e.preventDefault()
    console.log('submitting form')
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction')
    let programming = document.getElementById('programming')
    let cooking = document.getElementById('cooking')
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let booksObj = {
        bookName: name,
        bookAuthor: author,
        bookType: type
    }
    let myBooks = localStorage.getItem('myBooks')
    let myObj;
    if (myBooks == null) {
        myObj = []
    }
    else {
        myObj = JSON.parse(myBooks)
    }
    myObj.push(booksObj)
    console.log(myObj)
    localStorage.setItem('myBooks', JSON.stringify(myObj))
    let books = new Books(booksObj.bookName, booksObj.bookAuthor, booksObj.bookType)
    let display = new Display()
    display.addBooks()
    display.clear()
    display.alerts('Congratulations!', "Your book is added in list", "success")
}
function addingBooks() {
    let myBooks = localStorage.getItem('myBooks')
    let myObj;
    let booksParent = document.getElementById('tBody')
    if (myBooks == null) {
        myObj = []
    }
    else {
        myObj = JSON.parse(myBooks)
    }
    let text = document.getElementById('text')
    let html = ``
    myObj.forEach(function (element, index) {
        if (element.bookName.length == 0) {
            element.bookName = 'Unnamed'
        }
        if (element.bookAuthor.length == 0) {
            element.bookAuthor = 'Unnamed'
        }
        html += `<tr class="boooks">
                    <td>${element.bookName}</td>
                    <td>${element.bookAuthor}</td>
                    <td>${element.bookType}</td>
                    <td><button id="${index}" onClick="deleteNotes(this.id)" style="border: none; color: white; background-color: lightcoral; border-radius: 5px; cursor: pointer;">Delete No ${index + 1}</button></td>
                 </tr>`
                 console.log(index)
        booksParent.innerHTML = html;
        if (myObj.length > 10) {
            let table = document.getElementById('table')
            table.setAttribute('style', 'overflow: scroll; height: 400px')
        }
    });
    console.log(myObj.length)
}
function deleteNotes(index) {
    let myBooks = localStorage.getItem('myBooks')
    let myObj;
    if (myBooks == null) {
        myObj = []
    }
    else {
        myObj = JSON.parse(myBooks)
    }
    myObj.splice(index, 1)
    localStorage.setItem('myBooks', JSON.stringify(myObj))
    addingBooks()
}

let search = document.getElementById('search')
search.addEventListener('input', function () {
    let searchVal = search.value;
    let booksChild = document.getElementsByClassName('boooks')
    Array.from(booksChild).forEach(function (element) {
        let childrens = element.getElementsByTagName('td')[0].innerHTML;
        if (childrens.includes(searchVal)) {
            let childrens = element.getElementsByTagName('td')[0]
            childrens.setAttribute('style', 'color: green')
        }
        else {
            element.setAttribute('style', 'display: none;')
        }
    })
})