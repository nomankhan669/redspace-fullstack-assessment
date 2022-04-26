import { Link } from "react-router-dom";
import {characters} from '../App';

export const ProfileCard = ({loading, profile}) => {
  const avatars = require.context('../assets/images', true);
  const character = characters.find((item) => item.name === profile.name);
  const characterImg = loading ? '' : avatars(`./${character.icon}`) ;

  return (
    <div className="card mb-5 mb-md-0">
      <div className={`card-body ${loading ? 'loading' : ''}`}>
        <div className="cardNav">
          <div className="row mb-4">
            <div className="col-2">
              <Link to='/'>
                <i className="bi bi-arrow-left-short" style={{fontSize:'32px'}}></i>
              </Link>
            </div>
            <div className="col-10 d-flex flex-column justify-content-center">
              <h3 className="m-0">Profile</h3>
            </div>
          </div>
        </div>
          
        <div className="avatar-img mb-5 text-center">
          {loading ? <div className="text-content" style={{height:'210px'}}></div> : <img src={characterImg} />}
        </div>

        <div className="row">
          <div className="col-md-4">
            <p className="mb-0">Name</p>
          </div>
          <div className="col-md-8">
            <p className="text-muted mb-0 text-content">{profile.name}</p>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-4">
            <p className="mb-0">Height</p>
          </div>
          <div className="col-md-8">
            <p className="text-muted mb-0 text-content">{profile.height}</p>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-4">
            <p className="mb-0">Mass</p>
          </div>
          <div className="col-md-8">
            <p className="text-muted mb-0 text-content">{profile.mass}</p>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-4">
            <p className="mb-0">Gender</p>
          </div>
          <div className="col-md-8">
            <p className="text-muted mb-0 text-content">{profile.gender}</p>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-4">
            <p className="mb-0">Hair Color</p>
          </div>
          <div className="col-md-8">
            <p className="text-muted mb-0 text-content">{profile.hair_color}</p>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-4">
            <p className="mb-0">Skin Color</p>
          </div>
          <div className="col-md-8">
            <p className="text-muted mb-0 text-content">{profile.skin_color}</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}