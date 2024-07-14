const https = require('https');

const options = {
    hostname: 'api.nightbot.tv',
    port: 443,
    path: '/1/timers',
    method: 'GET',
    headers: {
        'Authorization': 'Bearer e660eb04942fdcc61b58ee77b6bb28c9',
        'Content-Type': 'application/json'
    }
};

const req = https.request(options, (res) => {
    console.log("get data")
    let data = '';

    // A chunk of data has been received.
    res.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received.
    res.on('end', () => {
        try {
            const jsonData = JSON.parse(data);
            console.log(jsonData);
        } catch (e) {
            console.error('Error parsing JSON!', e);
        }
    });
});

req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
});

req.end();

