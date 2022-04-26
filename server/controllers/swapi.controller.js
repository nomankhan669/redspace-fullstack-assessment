import "dotenv/config";
import {
  GetFilmsByUrls,
  GetPlanetByUrl,
  GetSpeciesByUrls,
  PersonDetailsById,
} from "../services/swapi.service.js";

export const GetPerson = async (req, res) => {
  try {
    const person = await PersonDetailsById(req.params.id);
    const personDetailsPromise = [
      GetPlanetByUrl(person.metadata.homeworld),
      GetSpeciesByUrls(person.metadata.species),
      GetFilmsByUrls(person.metadata.films)
    ];
    const response = await Promise.all(personDetailsPromise);

    res.send({
      ...person.details,
      home_planet: response[0],
      species: response[1],
      films: response[2],
    });

  } catch (error) {
    console.log(error);
    if (error.response) {
      res.status(error.response?.status).send(error.response?.statusText);
    } else {
      res.status(500).send('Internal server error');
    }
  }
};
