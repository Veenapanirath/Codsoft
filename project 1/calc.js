var display = document.getElementById("display");
var buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let val = button.getAttribute("value"); 

        if (val === "AC") {
            display.value = ""; 
        } 
        else if (val === "DE") {
            display.value = display.value.slice(0, -1); 
        } 
        else if (val === "=") {
         
                display.value = eval(display.value); 
            
        } 
        else {
            display.value += val; 
        }
    });
});