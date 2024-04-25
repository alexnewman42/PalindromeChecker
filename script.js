const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
    if (textInput.value === "") {
        alert("Please input a value");
    } else if (textInput.value.length === 1) {
        result.innerText = `${textInput.value} is a palindrome`;
    } else if (textInput.value === [...textInput.value].reverse().join("")) {
        result.innerText = `${textInput.value} is a palindrome`;
    }
});