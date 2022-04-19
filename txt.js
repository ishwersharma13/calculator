function valuebutton(e) {
    calculator.screen.value += e.value;
}
function Clear(){
    calculator.screen.value = null
}
function Calculate(){
    calculator.screen.value = eval( calculator.screen.value)
}