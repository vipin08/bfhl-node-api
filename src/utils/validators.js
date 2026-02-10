module.exports = {
    validateInput: (data) => {
        if (!data || typeof data !== 'object') {
            return { valid: false, message: 'Input must be a valid object.' };
        }

        const { type, value } = data;

        if (!type || !['fibonacci', 'primes', 'lcm', 'hcf', 'ai'].includes(type)) {
            return { valid: false, message: 'Type must be one of: fibonacci, primes, lcm, hcf, ai.' };
        }

        if (type === 'fibonacci' && (typeof value !== 'number' || value < 0)) {
            return { valid: false, message: 'Value for Fibonacci must be a non-negative number.' };
        }

        if (type === 'primes' && (typeof value !== 'number' || value <= 1)) {
            return { valid: false, message: 'Value for Primes must be a number greater than 1.' };
        }

        if ((type === 'lcm' || type === 'hcf') && (!Array.isArray(value) || value.length !== 2 || value.some(v => typeof v !== 'number'))) {
            return { valid: false, message: 'Value for LCM and HCF must be an array of two numbers.' };
        }

        return { valid: true };
    }
};