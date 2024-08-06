
let buttons = document.querySelectorAll("button");

let string = "";
let display = document.querySelector('#inputbox'); // Target the input box correctly

buttons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    let value = e.target.innerHTML;

    if (value === "=") {
      // Evaluate the expression and display the result
      try {
        string = eval(string) || ""; // Ensure string is empty if eval fails
      } catch {
        string = "Error"; // Display error for invalid expressions
      }
    } else if (value === "AC") {
      // Clear the input
      string = "";
    } else if (value === "DEL") {
      // Delete the last character
      if (string !== "Error") { // Prevent deletion when there's an error message
        string = string.slice(0, -1);
      } else {
        string = ""; // Reset on DEL when showing "Error"
      }
    } else {
      // Append the clicked button value to the string
      if (string === "Error") { // Start fresh after an error
        string = "";
      }
      string += value;
    }

    // Update the display value
    if (display) {
      display.value = string;
    }
  });
});

 