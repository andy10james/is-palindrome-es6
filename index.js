function isPalindrome(str) {
    if (str === null || str === undefined) {
        return false;
    }
    
    var input = str;
    if (typeof(input) !== "string") {
        input = input.toString();
    }

    input = input.replace(/[',.: ]/g, "").toLowerCase();

    for (let i = 0; i < input.length; i++) { 
        let char = input[i];
        let otherChar = input[input.length -1 - i];

        if (char != otherChar) {
            return false;
        }
    }

    return true;
}

export { isPalindrome };