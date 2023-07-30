const fetch = require('fetch').fetchUrl;

const url = 'https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '174ce9e783msh79d4287c19b00d7p13f2ddjsn126339845e10',
        'X-RapidAPI-Host': 'ajayakv-rest-countries-v1.p.rapidapi.com'
    }
}

async function getCountry() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
    
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

getCountry()