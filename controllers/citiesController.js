const { cities, getNewId } = require('../data/databaseCities')
const City = require('../models/City')

const getCities = (req, res) => {
    res.status(200).json(cities)
}

const getCityByName = (req, res) => {
    res.status(200).json(cities)
}

const getCityByCountry = (req, res) => {
    res.status(200).json(cities)
}

const registerCity = (req, res) => {
    res.status(200).json(cities)
}

const updateCity = (req, res) => {
    res.status(200).json(cities)
}

const deleteCity = (req, res) => {
    res.status(200).json(cities)
}


module.exports = {
    getCities,
    getCityByName,
    getCityByCountry,
    registerCity,
    updateCity,
    deleteCity
}
