const input = document.getElementById("input");
// main logic triggered by button
function check() {
    const value = input.value;

    if (!isValidInput(value)) {
        alert("Numbers are not allowed!");
        input.value = "";
        return;
    }

    if (isPalindrome(value)) {
        alert("The input is a palindrome.");
    } else {
        alert("The input is not a palindrome.");
    }

    input.value = ""; // clear input
}

// check if input is valid (no numbers)
function isValidInput(str) {
    // loop through
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        // input is invalid if num detected
        if (char >= '0' && char <= '9') {
            return false;
        }
    }

    // If no numbers were found, the input is valid
    return true;
}

// reverse string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// check if a string is a palindrome
function isPalindrome(str) {
    const reversed = reverseString(str);
    return str === reversed;
}

