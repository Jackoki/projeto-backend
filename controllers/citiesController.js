const { cities, getNewId } = require('../data/databaseCities')
const City = require('../models/City')

const getCities = (req, res) => {
    res.status(200).json(cities)
}

const getCityByName = (req, res) => {
    const cityName = req.params.name;
    
    const city = cities.find(c => c.name.toLowerCase().trim() === cityName.toLowerCase().trim());

    if (!city) {
        return res.status(404).json({ message: "Cidade não encontrada" });
    }

    res.status(200).json(city)
}

const getCityByCountry = (req, res) => {
    res.status(200).json(cities)
}

const registerCity = (req, res) => {
    const newCity =  req.body
    if (!newCity.name || !newCity.population || !newCity.idCountry) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }
    
    else{
        const cityCreated = new City(getNewId(), newCity.name, newCity.population, newCity.idCountry)
    
        cities.push(cityCreated)
        res.status(200).json(cityCreated)
    }
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
