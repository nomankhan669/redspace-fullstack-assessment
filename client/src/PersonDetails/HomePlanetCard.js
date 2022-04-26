export const HomePlanetCard = ({loading, planet}) => {
  return (
    <div className="row mb-5">
      <div className="col-md-12">
        <div className="card">
          <div className={`card-body ${loading ? 'loading' : ''}`}>
            <h3>Home Planet</h3>

            <div className="row mt-5">
              <div className="col-md-4">
                <p className="mb-0">Name</p>
              </div>
              <div className="col-md-8">
                <p className="text-muted mb-0 text-content">{planet.name}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-md-4">
                <p className="mb-0">Population</p>
              </div>
              <div className="col-md-8">
                <p className="text-muted mb-0 text-content">{planet.population}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-md-4">
                <p className="mb-0">Terrain</p>
              </div>
              <div className="col-md-8">
                <p className="text-muted mb-0 text-content">{planet.terrain}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}