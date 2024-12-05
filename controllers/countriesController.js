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
    const countryAMC = req.params.allowMultipleCitizenship;

    const isAMC = countryAMC === "true";
    
    const AMC = countries.filter(c => c.allowMultipleCitizenship === isAMC);

    if (AMC.length === 0) {
        return res.status(404).json({ message: "País não encontrado" });
    }

    res.status(200).json(AMC)
}

const registerCountry = (req, res) => {
    const newCountry =  req.body
    if (!newCountry.name || !newCountry.continent || !newCountry.language || !newCountry.gdp || !newCountry.allowMultipleCitizenship) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    else{
        const countryCreated = new Country(getNewId(), newCountry.name, newCountry.continent, newCountry.language, newCountry.gdp, newCountry.allowMultipleCitizenship)

        countries.push(countryCreated)
        res.status(200).json(countryCreated)
    }
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
