const axios = require('axios')

const options = {
    method: 'GET',
    url: 'https://rest-country-api.p.rapidapi.com/',
    headers: {
    'X-RapidAPI-Key': '174ce9e783msh79d4287c19b00d7p13f2ddjsn126339845e10',
    'X-RapidAPI-Host': 'rest-country-api.p.rapidapi.com'
    }
  };
  
async function getCountries() {
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getCountries()