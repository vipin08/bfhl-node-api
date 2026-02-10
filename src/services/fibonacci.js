function calculateFibonacci(n) {
    if (n <= 0) return [];
    const res = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) res.push(0);
        else if (i === 1) res.push(1);
        else res.push(res[i - 1] + res[i - 2]);
    }
    return res;
}

module.exports = calculateFibonacci;