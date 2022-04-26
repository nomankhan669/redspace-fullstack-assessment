import axios from "axios";
import 'dotenv/config';
import {jest} from '@jest/globals';
import { PersonDetailsById, GetPlanetByUrl, GetSpeciesByUrls, GetFilmsByUrls } from "./swapi.service";

jest.mock('axios');

describe('SWAPI Service', () => {

  const mockReturnData = {
    details: {
      name: 'abc',
      height: '150',
      mass: '230',
      hair_color: 'brown',
      skin_color: 'fair',
      gender: 'male',
      birth_year: '12BBY'
    },
    metadata: {
      homeworld: [],
      species: [],
      films: []
    }
  };
  const mockAPIResp = {
    data: {
      name: 'abc',
      height: '150',
      mass: '230',
      hair_color: 'brown',
      skin_color: 'fair',
      gender: 'male',
      birth_year: '12BBY',
      homeworld: [],
      species: [],
      films: []
    }
  };

  it('should return person details', async () => {
    axios.get.mockResolvedValueOnce(mockAPIResp);

    const result = await PersonDetailsById(1);

    expect(axios.get).toHaveBeenCalledWith(`${process.env.API_PATH}/people/1`);
    expect(result).toEqual(mockReturnData);
  })

  describe('test GetPlanetByUrl', () => {
    it('should test GetPlanetByUrl', async () => {
      const mockResp = {
        data: {
          name: 'planet',
          terrain: 'sandy',
          population: '10000'
        }
      };
      axios.get.mockResolvedValueOnce(mockResp);
      const result = await GetPlanetByUrl(['http://abc.com', 'http://xyz.com']);
  
      expect(result).toEqual(mockResp.data);
    })
  
    it('should test GetPlanetByUrl on error', async () => {
  
      axios.get.mockRejectedValueOnce(new Error('network failed'));
      const result = await GetPlanetByUrl(['http://abc.com']);
  
      expect(result).toEqual([]);
    })
  })

  describe('test GetSpeciesByUrls', () => {
    it('should test GetSpeciesByUrls with empty argument', async () => {
      const result = await GetSpeciesByUrls([]);

      expect(result).toEqual([]);
    })

    it('should test GetSpeciesByUrls', async () => {
      const mockResp = {
        data: {
          name: 'human',
          average_lifespan: '30',
          classification: 'upper',
          language: 'english',
        }
      };
      axios.get.mockResolvedValueOnce(mockResp);
      const result = await GetSpeciesByUrls(['http://abc.com']);

      expect(result).toEqual(mockResp.data);
    })

    it('should test GetSpeciesByUrls on empty response', async () => {

      axios.get.mockResolvedValueOnce([]);
      const result = await GetSpeciesByUrls(['http://abc.com']);

      expect(result).toEqual([]);
    })

    it('should test GetSpeciesByUrls on error', async () => {

      axios.get.mockRejectedValueOnce(new Error('network failed'));
      const result = await GetSpeciesByUrls(['http://abc.com']);

      expect(result).toEqual([]);
    })
  })

  describe('test GetFilmsByUrls', () => {
    it('should test GetFilmsByUrls with empty arguments', async () => {
      const result = await GetFilmsByUrls([]);
  
      expect(result).toEqual([]);
    })
  
    it('should test GetFilmsByUrls', async () => {
      const mockResp = {
        data: {
          title: 'film1',
          director: 'abc',
          producer: 'xyz',
          release_date: '01-01-2030',
        }
      };
      axios.get.mockResolvedValueOnce(mockResp);
      const result = await GetFilmsByUrls(['http://abc.com']);
  
      expect(result).toEqual([mockResp.data]);
    })
  
    it('should test GetFilmsByUrls on error', async () => {
  
      axios.get.mockRejectedValueOnce(new Error('network failed'));
      const result = await GetFilmsByUrls(['http://abc.com']);
  
      expect(result).toEqual([]);
    })
  })
})