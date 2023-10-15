function enterInput(a) {
    let input = document.getElementsByClassName("calculator-display")[0].innerText + a
    document.getElementsByClassName("calculator-display")[0].innerText = input;
}

function calc() {
    let input = eval(document.getElementsByClassName("calculator-display")[0].innerText)
    document.getElementsByClassName("calculator-display")[0].innerText = input;   
}