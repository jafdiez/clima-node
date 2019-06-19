const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }

}).argv;

console.log(argv.direccion);

//const data = lugar.getLugarLatLng(argv.direccion);

//lugar.getLugarLatLng(argv.direccion)
//    .then(console.log);
// clima.getClima(43.259998, -3.840000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const dataLugar = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(dataLugar.lat, dataLugar.lng);
        return `El clima de ${direccion} es de ${temperatura} `;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}. ${e}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);