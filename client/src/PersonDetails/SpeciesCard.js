export const SpeciesCard = ({loading, species}) => {
  const parseKey = key => (key.charAt(0).toUpperCase() + key.slice(1)).replace('_', ' ');
  const speciesKeysArray = Object.keys(species);

  return (
    <div className="row mb-5 mb-md-0">
      <div className="col-md-12">
        <div className="card">
          <div className={`card-body ${loading ? 'loading' : ''}`}>
            <h3 className="mb-5">Species</h3>

            {speciesKeysArray.length === 0 && !loading ? <p className="text-center">Not Available</p> : ''}
            {!loading ?
              speciesKeysArray.map((key, index) => (
                <div key={index}>
                  <div className="row">
                    <div className="col-md-5">
                      <p className="mb-0">{parseKey(key)}</p>
                    </div>
                    <div className="col-md-7">
                      <p className="text-muted mb-0">{species[key]}</p>
                    </div>
                  </div>
                  {index === (speciesKeysArray.length - 1) ? '' : <hr/>}
                </div>
              )) :
              <>
                <div className="row">
                  <div className="col-md-12 text-content"></div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-md-12 text-content"></div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-md-12 text-content"></div>
                </div>
              </>
            }

          </div>
        </div>
      </div>
    </div>
  )
}