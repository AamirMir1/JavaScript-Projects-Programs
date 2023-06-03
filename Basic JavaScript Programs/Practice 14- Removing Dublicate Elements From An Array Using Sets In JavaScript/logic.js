// _____________________ Removing Dublicate Elements From An Array _______________________

let array = ["Rahul", "Sundeep", "Maheshwari", "CarryMinati", "Ashishchanchalani", "CarryMinati", "Sundeep"]

let newSet = new Set(array)
console.log(newSet)
let convertToArr = Array.from(newSet)
console.log(convertToArr)

