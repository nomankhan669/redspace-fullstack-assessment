import axios from "axios";

export const PersonDetailsById = async (id) => {
  try {
    const response = await axios.get(`${process.env.API_PATH}/people/${id}`);
    const {
      name,
      height,
      mass,
      hair_color,
      skin_color,
      gender,
      birth_year,
      homeworld,
      species,
      films,
    } = response.data;

    return {
      details: {
        name,
        height,
        mass,
        hair_color,
        skin_color,
        gender,
        birth_year,
      },
      metadata: { homeworld, species, films },
    };
  } catch (error) {
    throw error;
  }
};

export const GetPlanetByUrl = async (url) => {
  try {
    const response = await axios.get(url);
    const { name, terrain, population } = response.data;
    return {
      name,
      terrain,
      population,
    };
  } catch (error) {
    console.log(new Error(error));
    return [];
  }
};

export const GetSpeciesByUrls = async (urls) => {
  if (urls.length === 0) return [];

  try {
    const promiseArray = urls.map((url) => axios.get(url));
    const promiseResp = await Promise.all(promiseArray);
    const species = promiseResp.map((item) => {
      return {
        name: item.data.name,
        average_lifespan: item.data.average_lifespan,
        classification: item.data.classification,
        language: item.data.language,
      };
    });
    return species.length > 0 ? species[0] : species;
  } catch (error) {
    console.log(new Error(error));
    return [];
  }
};

export const GetFilmsByUrls = async (urls) => {
  if (urls.length === 0) return [];

  try {
    const promiseArray = urls.map((url) => axios.get(url));
    const promiseResp = await Promise.all(promiseArray);
    const films = promiseResp.map((item) => {
      return {
        title: item.data.title,
        director: item.data.director,
        producer: item.data.producer,
        release_date: item.data.release_date,
      };
    });
    return films;
  } catch (error) {
    console.log(new Error(error));
    return [];
  }
};
