const https = require('https');

const rateBook = (response) => {
  let rate = '';
  response.on('data', (chunks) => {
    rate += chunks;
  });
  response.on('end', () => {
    console.log(rate);
  });
};

https.get('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/10', rateBook);
