const pointInPolygon = require('point-in-polygon');
const readVehiclesLocationFile = require('../data/helpers');

// @desc    Get all vehicle's locations
// @route   GET /api/vehicles
// @access  Public
exports.getVehiclesLocations = async (req, res, next) => {
    try {
        const vehiclesLocations = readVehiclesLocationFile().map(vehicle => vehicle.location)
        res.status(200).json(vehiclesLocations)
    } catch (error) {
        console.log(error);
    }
}

// @desc    Get all vehicle ids
// @route   GET /api/vehicles/ids
// @access  Public
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
        res.status(200).json(ids)
    } catch (error) {
        console.log(error);
    }
}
