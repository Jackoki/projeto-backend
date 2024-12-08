const express = require('express')

const router = express.Router()
const citiesController = require('../controllers/citiesController')

router.get('/', citiesController.getCities)
router.get('/:name', citiesController.getCityByName)
router.get('/country/:name', citiesController.getCitiesByCountry)

router.post('/registerCity', citiesController.registerCity)

router.put('/:id', citiesController.updateCity)

router.delete('/:id', citiesController.deleteCity)

module.exports = router
