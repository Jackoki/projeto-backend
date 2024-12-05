const express = require('express')

const router = express.Router()
const countriesController = require('../controllers/countriesController')

router.get('/', countriesController.getCountries)
router.get('/:name', countriesController.getCountryByName)
router.get('/:continent', countriesController.getCountriesByContinent)
router.get('/:language', countriesController.getCountriesByLanguage)
router.get('/:allowMultipleCitizenship', countriesController.getCountriesByAMC)

router.post('/registerCountry', countriesController.registerCountry)

router.put('/:id', countriesController.updateCountry)

router.delete('/:id', countriesController.deleteCountry)

module.exports = router