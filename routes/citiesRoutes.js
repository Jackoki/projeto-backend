const express = require('express')

const router = express.Router()
const citiesController = require('../controllers/citiesController')

router.get('/', citiesController.getCities)
router.get('/:name', citiesController.getCityByName)

router.post('/registerCity', citiesController.registerCity)

router.put('/:id', citiesController.updateCity)

router.delete('/:id', citiesController.deleteCity)

module.exports = router
