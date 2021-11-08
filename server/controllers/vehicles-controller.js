const pointInPolygon = require('point-in-polygon');
const readVehiclesLocationFile = require('../data/helpers');

exports.getVehiclesLocations = async (req, res, next) => {
    try {
        const vehiclesLocations = readVehiclesLocationFile().map(vehicle => vehicle.location)
        res.status(200).json(vehiclesLocations)
    } catch (error) {
        console.log(error);
    }
}

// "location":{
//     "lat":51.4694976807,
//     "lng":-0.0493916683,
//     "bearing":0
//  },
exports.getVehiclesIds = async (req, res, next) => {
    try {
        const polygonCoordinates = JSON.parse(req.params.coordinates);

        const ids = []
        readVehiclesLocationFile().forEach(vehicle => {
            const vehicleLocationPoint = [vehicle.location.lat, vehicle.location.lng]
            if (pointInPolygon(vehicleLocationPoint,polygonCoordinates)) {
                ids.push(vehicle.id)
            }
        })
        console.log(polygonCoordinates);
        console.log(ids);
        res.status(200).json(ids)
    } catch (error) {
        console.log(error);
    }
}
