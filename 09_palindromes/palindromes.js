const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^a-z]/g, '');
    const array = string.split('');
    const reverseArray = array.reverse();
    const reverseString = reverseArray.join('');

    if (reverseString === string) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
