const fs = require('fs');
const path = require('path');

const readVehiclesLocationFile = () => {
    let rawVehiclesData = fs.readFileSync(path.join(__dirname + '/vehicles-location.json'),'utf8');
    return JSON.parse(rawVehiclesData)
}

module.exports = readVehiclesLocationFile