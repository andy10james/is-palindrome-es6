function isPalindrome(str) {
    if (str === null || str === undefined) {
        return false;
    }

    let input = str;
    if (typeof(input) !== "string") {
        input = input.toString();
    }

    if (input.indexOf(" ") !== -1) {
        input = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    }

    for (let i = 0; i < input.length; i++) { 
        const char = input[i];
        const otherChar = input[input.length -1 - i];

        if (i > input.length / 2) {
            break;
        }

        if (char !== otherChar) {
            return false;
        }
    }

    return true;
}

export { isPalindrome };