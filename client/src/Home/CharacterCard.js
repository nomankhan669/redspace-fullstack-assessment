import { Link } from "react-router-dom";

const styles = {
  characterCard: {
    position: 'relative',
    minHeight: '150px'
  },
  avatarImg: {
    maxWidth: '80px',
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    opacity: '0.6',
    transition: 'opacity .5s ease'
  }
}

export const CharacterCard = ({person}) => {
  const avatars = require.context('../assets/images', true);
  const loadImage = imgName => (avatars(`./${imgName}`));
  return (
    <div className='col-sm-12 col-lg-3' key={person.id}>
      <div className='card mb-4'>
        <div className='card-body character-card' style={styles.characterCard}>
          <h5 className='card-title'>{person.name}</h5>
          <Link to={`person-details/${person.id}`}>Details</Link>
          <img className="person-avatar" style={styles.avatarImg} src={loadImage(person.icon)} alt="person avatar" />
        </div>
      </div>
    </div>
  )
}