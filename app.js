let inputBox = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {

        let value = button.innerText;

        if (value === "AC") {
            expression = "";
            inputBox.value = "";
        }

        else if (value === "DE") {
            expression = expression.slice(0, -1);
            inputBox.value = expression;
        }

        else if (value === "=") {
            try {
                expression = eval(expression);
                inputBox.value = expression;
            } catch {
                inputBox.value = "Error";
                expression = "";
            }
        }

        else {
            expression += value;
            inputBox.value = expression;
        }
    });
});
