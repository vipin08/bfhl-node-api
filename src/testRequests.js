const http = require('http');

function postJSON(data) {
    return new Promise((resolve, reject) => {
        const body = JSON.stringify(data);
        const options = {
            hostname: 'localhost',
            port: 3000,
            path: '/bfhl',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(body)
            }
        };

        const req = http.request(options, (res) => {
            let resp = '';
            res.on('data', (chunk) => resp += chunk);
            res.on('end', () => {
                let parsed = resp;
                try { parsed = JSON.parse(resp); } catch (e) {}
                resolve({ status: res.statusCode, body: parsed });
            });
        });

        req.on('error', (err) => reject(err));
        req.write(body);
        req.end();
    });
}

async function runTests() {
    const tests = [
        { label: 'FIB', body: { fibonacci: 7 } },
        { label: 'PRIME', body: { prime: [2,4,7,9,11] } },
        { label: 'LCM', body: { lcm: [12,18,24] } },
        { label: 'HCF', body: { hcf: [24,36,60] } },
        { label: 'AI', body: { AI: 'What is the capital city of Maharashtra?' } },
    ];

    for (const t of tests) {
        try {
            const res = await postJSON(t.body);
            console.log('---', t.label, '---');
            console.log('Status:', res.status);
            console.log('Body:', JSON.stringify(res.body, null, 2));
        } catch (err) {
            console.error(t.label, 'error:', err.message);
        }
    }
}

runTests();
