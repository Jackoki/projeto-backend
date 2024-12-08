const express = require('express')

const router = express.Router()
const countriesController = require('../controllers/countriesController')
const citiesController = require('../controllers/citiesController')

router.get('/', countriesController.getCountries)
router.get('/:name', countriesController.getCountryByName)
router.get('/continent/:continent', countriesController.getCountriesByContinent)
router.get('/language/:language', countriesController.getCountriesByLanguage)
router.get('/citizenship/:allowMultipleCitizenship', countriesController.getCountriesByAMC)
router.get('/cities', citiesController.getCityByCountry)

router.post('/registerCountry', countriesController.registerCountry)

router.put('/:id', countriesController.updateCountry)

router.delete('/:id', countriesController.deleteCountry)

module.exports = router
