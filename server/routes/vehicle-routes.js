var express = require("express")
var router = express.Router()
const vehiclesController = require("../controllers/vehicles-controller")

//  Route: .../api/vehicles 
router.get("/", vehiclesController.getVehiclesLocations)
router.get("/ids/:coordinates", vehiclesController.getVehiclesIds)

module.exports = router
