function gcdTwo(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
}

function calculateHCF(arr) {
    if (!Array.isArray(arr) || arr.length === 0) throw new Error('hcf requires a non-empty array');
    return arr.reduce((acc, val) => gcdTwo(acc, val));
}

module.exports = calculateHCF;