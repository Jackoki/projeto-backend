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

const getCitiesByCountry = (req, res) => {
    const countryName = req.params.name;
    
    const country = countries.find(c => c.name.toLowerCase().trim() === countryName.toLowerCase().trim());

    if (!country) {
        return res.status(404).json({ message: "País não encontrada" });
    }

    const citiesByCountry = cities.filter(c => c.idCountry === country.id)

    if (citiesByCountry.length === 0) {
        return res.status(404).json({ message: "Cidades não encontradas" });
    }

    res.status(200).json(citiesByCountry)
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
    const cityId = parseInt(req.params.id);
    const cityFound = cities.findIndex(c => c.id === cityId)
    if (cityFound === -1) {
        return res.status(404).json({ message: "Cidade não encontrada" });
    }

    const updatedCity = {
        ...cities[cityFound],
        ...req.body
    }

    cities[cityFound] = updatedCity;

    res.status(200).json(updatedCity)
}

const deleteCity = (req, res) => {
    const cityId = parseInt(req.params.id, 10);
    const cityFound = cities.findIndex(c => c.id === cityId);
    if(cityFound === -1){
        return res.status(404).json({ message: 'Cidade não encontrada.' });
    }

    const [deletedCity] = cities.splice(cityFound, 1);

    res.status(200).json(deletedCity);
}


module.exports = {
    getCities,
    getCityByName,
    getCitiesByCountry,
    registerCity,
    updateCity,
    deleteCity
}
