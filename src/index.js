module.exports = function reverse (n) {
if (n < 0) {
    const positiveNumber = n * -1;
    return positiveNumber.toString().split('').reverse().join('');
} else {
    return n.toString().split('').reverse().join('');
}
}
