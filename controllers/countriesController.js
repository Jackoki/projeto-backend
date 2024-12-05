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
    const continentName = req.params.continent;
    
    const continent = countries.filter(c => c.continent.toLowerCase().trim() === continentName.toLowerCase().trim());

    if (!continent) {
        return res.status(404).json({ message: "Continente não encontrado" });
    }

    res.status(200).json(continent)
}

const getCountriesByLanguage = (req, res) => {
    const languageName = req.params.language;

    const language = countries.filter(c => c.language.toLowerCase().trim() === languageName.toLowerCase().trim());

    if (language.length === 0) {
        return res.status(404).json({ message: "Língua não encontrada" });
    }

    res.status(200).json(language)

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
