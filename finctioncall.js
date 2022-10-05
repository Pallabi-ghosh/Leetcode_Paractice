console.log('coding is fun!')

function element(prm1, prm2) {
    var prm1 = 4
    var prm2 = 5
    return prm1 + prm2
}

console.log(element())


const prompt = require('prompt-sync')()

    var firstName = prompt("gjhjhjkj")
    var lastName = prompt("gjhjhjkj")

console.log ("type name " , firstName, lastName)


function getPost(){
    window.open("https://www.geeksforgeeks.org/",
    "_blank", "width=400, height=300, top=230, left=540")
}

function close(){
    window.close()
}

function sayHello(){
    alert("gjhkjkj")
}

function button() {
    var petName;
    var lastName;
    petName = document.getElementById("pet").value
    lastName = document.getElementById("lastName").value
    document.getElementById("subbmitButton").value
    document.getElementById("second").innerHTML = petName + "  " + lastName
}


function sendButton() {
    var x = document.getElementById("inputFild").value
    document.getElementById("demo").innerHTML = x;
}

function compare(age) {

    if (age === 18) {
        return "you are mine"
    } else if (age > 44) {
        return "be around"
    } else {
        return "bye bye"
    }

}

console.log(compare(5))
