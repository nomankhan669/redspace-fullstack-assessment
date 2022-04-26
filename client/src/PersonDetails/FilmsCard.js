const Film = ({data}) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <h5>{data.title}</h5>
          <div>
            <small>Producers</small>
            <p className="text-muted mb-2">{data.producer}</p>
          </div>
          <div>
            <small>Director</small>
            <p className="text-muted mb-2">{data.director}</p>
          </div>
          <div>
            <small>Release Date</small>
            <p className="text-muted mb-0">{data.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const FilmsCard = ({loading, films}) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className={`card-body ${loading ? 'loading' : ''}`}>
            <h3>Films</h3>

            <div className="row mt-5">
              {!loading ? 
                films.map((film, index) => (
                  <Film key={index} data={film} />
                ))
              :
                <>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <p className="text-content"></p>
                        <p className="text-content"></p>
                        <p className="text-content mb-0"></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <p className="text-content"></p>
                        <p className="text-content"></p>
                        <p className="text-content mb-0"></p>
                      </div>
                    </div>
                  </div>
                </>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}