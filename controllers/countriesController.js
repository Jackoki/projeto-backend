const { countries, getNewId } = require('../data/databaseCountries')
const Country = require('../models/Country')

const getCountries = (req, res) => {
    res.status(200).json(countries)
}

const getCountryByName = (req, res) => {
    const countryName = req.params.name;
    
    const country = countries.find(c => c.name.toLowerCase().trim() === countryName.toLowerCase().trim());

    if (!country) {
        return res.status(404).json({ message: "País não encontrado" });
    }

    res.status(200).json(country)
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
