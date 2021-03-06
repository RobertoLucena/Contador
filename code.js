i = 0;

/*function dimc() {
    var clickbutton1 = document.getElementById("entrevistas")
    clickbutton1[0].innerHTML = i - 1
    i--
}*/

function dimc() {
    if (i > 0) {
        i--
        document.getElementById("b1").innerHTML = i
    }
}


/*function aumc() {
    var clickbutton1 = document.getElementById("entrevistas")
    clickbutton1[0].innerHTML = i
    i++
}*/

function aumc() {
    i++
    document.getElementById("b1").innerHTML = i
}

x = 0;

/*function dime() {
    var clickbutton2 = document.getElementById("curriculos")
    clickbutton2[0].innerHTML = x - 1
    x--
}*/

function dime() {
    if (x > 0) {
        x--
        document.getElementById("b2").innerHTML = x
    }
}


/*function aume() {
    var clickbutton2 = document.getElementById("curriculos")
    clickbutton2[0].innerHTML = x
    x++
}*/

function aume() {
    x++
    document.getElementById("b2").innerHTML = x
}