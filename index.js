const axios = require('axios')
const dotenv = require('dotenv').config()

const options = {
    method: 'GET',
    url: 'https://rest-country-api.p.rapidapi.com/',
    headers: {
    'X-RapidAPI-Key': process.env.APIKEY,
    'X-RapidAPI-Host': 'rest-country-api.p.rapidapi.com'
    }
  };
  
async function getCountries() {
    try {
        const response = await axios.request(options);
        const countries = response.data
        countries.forEach(name => {
            console.log(name);
        });
        console.log(countries);
    } catch (error) {
        console.error(error);
    }
}

getCountries()