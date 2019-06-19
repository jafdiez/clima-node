const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=875608ff11417c0787946c41e6feb7a9`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}