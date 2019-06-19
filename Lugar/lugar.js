const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedURL }`,
        timeout: 1000,
        headers: {
            'X-RapidAPI-Key': '16a216f60bmsh0127d9da2ca2413p1161a7jsnc954def3838c',
            'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.comc'
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.lenght === 0) {
        throw new Error((`No hay resultados para ${dir}`));
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}