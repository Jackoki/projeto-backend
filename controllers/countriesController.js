const { countries, getNewId } = require('../data/databaseCountries')
const Country = require('../models/Country')

const getCountries = (req, res) => {
    const { page = 1 } = req.query

     //Recebe o limite de valores a aparecer na página pela query
     const limit = parseInt(req.query.limit, 10) || 5

     return paginate(countries, page, limit, res)
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
    const { page = 1 } = req.query

    //Recebe o limite de valores a aparecer na página pela query
    const limit = parseInt(req.query.limit, 10) || 5

    const continentName = req.params.continent;
    
    const continent = countries.filter(c => c.continent.toLowerCase().trim() === continentName.toLowerCase().trim());

    if (!continent) {
        return res.status(404).json({ message: "Continente não encontrado" });
    }

    return paginate(continent, page, limit, res)
}

const getCountriesByLanguage = (req, res) => {
    const { page = 1 } = req.query

    //Recebe o limite de valores a aparecer na página pela query
    const limit = parseInt(req.query.limit, 10) || 5

    const languageName = req.params.language;

    const language = countries.filter(c => c.language.toLowerCase().trim() === languageName.toLowerCase().trim());

    if (language.length === 0) {
        return res.status(404).json({ message: "Língua não encontrada" });
    }


    return paginate(language, page, limit, res)
}

const getCountriesByAMC = (req, res) => {
    const { page = 1 } = req.query

    //Recebe o limite de valores a aparecer na página pela query
    const limit = parseInt(req.query.limit, 10) || 5
    
    const countryAMC = req.params.allowMultipleCitizenship;

    const isAMC = countryAMC === "true";
    
    const AMC = countries.filter(c => c.allowMultipleCitizenship === isAMC);

    if (AMC.length === 0) {
        return res.status(404).json({ message: "País não encontrado" });
    }

    return paginate(AMC, page, limit, res)
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
    const countryId = parseInt(req.params.id);
    const countryFound = countries.findIndex(c => c.id === countryId)
    if (!countryFound) {
        return res.status(404).json({ message: "País não encontrado" });
    }

    const updatedCountry = {
        ...countries[countryFound],
        ...req.body
    }

    countries[countryFound] = updatedCountry;

    res.status(200).json(updatedCountry)
}

const deleteCountry = (req, res) => {
    const countryId = parseInt(req.params.id, 10);
    const countryFound = countries.findIndex(c => c.id === countryId);
    if(countryFound === -1){
        return res.status(404).json({ message: 'País não encontrado.' });
    }

    const [deletedCountry] = countries.splice(countryFound, 1);

    res.status(200).json(deletedCountry);
}

const paginate = (database, page, limit, res) => {
    // Se o limite da página não for 5, 10 ou 30, será acionado um erro
    if (![5, 10, 30].includes(limit)) {
        return res.status(400).json({ message: 'O limite deve ser 5, 10 ou 30 países por página' });
     }

    //Variável e não constante para receber a última página da consulta
    let lastPage = 1

    //Constante que recebe o total de paises do vetor
    const quantityCountries = database.length

    if(quantityCountries !== 0) {
        const alfabeticalOrderCountries = [...database].sort((a, b) => {
            // Compara os nomes dos países em ordem alfabética (case-insensitive)
            return a.name.localeCompare(b.name);
        });

        // Calcula a última página
        lastPage = Math.ceil(quantityCountries / limit);

        if (page < 1 || page > lastPage) {
            return res.status(400).json({ message: "Página inválida" });
        }

        // Calcula o índice inicial e final com base na página e no limite
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        // Pega a fatia dos países conforme a página e limite
        const countriesPage = alfabeticalOrderCountries.slice(startIndex, endIndex);

        return res.status(200).json({
            countries: countriesPage,
            currentPage: page,
            lastPage: lastPage,
            totalCountries: quantityCountries
        });
    }

    else {
        return res.status(400).json({ message: "Não foi encontrado nenhum registro de países" });
    }
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
