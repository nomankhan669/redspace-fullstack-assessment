import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../App.css'
import { ProfileCard } from "./ProfileCard";
import { HomePlanetCard } from "./HomePlanetCard";
import { SpeciesCard } from "./SpeciesCard";
import { FilmsCard } from "./FilmsCard";

const PersonDetails = () => {

  const serverURL = 'http://localhost:8088';

  const { id } = useParams();
  const [ loading, setLoading ] = useState(true);
  const [ profile, setProfile ] = useState({});
  const [ homePlanet, setHomePlanet ] = useState({});
  const [ speciesArr, setSpecies ] = useState({});
  const [ filmsArr, setFilms ] = useState([]);

  const fetchCharacterProfile = useCallback((characterId) => {
    fetch(`${serverURL}/getPerson/${characterId}`)
      .then(response => response.json())
      .then(response => {
        const {species, films, home_planet, ...person} = response;
        setProfile(person);
        setHomePlanet(home_planet);
        setSpecies(species);
        setFilms(films);
        setLoading(false);
      })
  }, [id])

  useEffect(() => {
    fetchCharacterProfile(id);
  }, [fetchCharacterProfile])

  return (
    <div className="main mt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <ProfileCard loading={loading} profile={profile}/>
          </div>
          <div className="col-md-3">
            <HomePlanetCard loading={loading} planet={homePlanet} />
            <SpeciesCard loading={loading} species={speciesArr} />
          </div>
          <div className="col-md-6">
            <FilmsCard loading={loading} films={filmsArr} />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default PersonDetails;