const { countries, getNewId } = require('../data/databaseCountries')
const Country = require('../models/Country')

const getCountries = (req, res) => {
    res.status(200).json(countries)
}

const getCountryByName = (req, res) => {
    res.status(200).json(countries)
}

const getCountriesByContinent = (req, res) => {
    res.status(200).json(countries)
}

const getCountriesByLanguage = (req, res) => {
    res.status(200).json(countries)
}

const getCountriesByAMC = (req, res) => {
    res.status(200).json(countries)
}

const registerCountry = (req, res) => {
    res.status(200).json(countries)
}

const updateCountry = (req, res) => {
    res.status(200).json(countries)
}

const deleteCountry = (req, res) => {
    res.status(200).json(countries)
}

module.exports = {
    getCountries,
    getCountryByName,
    getCountriesByContinent,
    getCountriesByLanguage,
    getCountriesByAMC,
    registerCountry,
    updateCountry,
    deleteCountry
}
