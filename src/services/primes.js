function isPrimeNumber(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0) return false;
    const limit = Math.floor(Math.sqrt(num));
    for (let i = 3; i <= limit; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function calculatePrimes(arr) {
    if (!Array.isArray(arr)) return [];
    return arr.filter(x => Number.isInteger(x) && isPrimeNumber(x));
}

module.exports = calculatePrimes;