const Search = ({ movies, addToWhitelist }) => {
  console.log(movies);

  return (
    <div className='container py-5'>
      <div className='row'>
        {movies.map((movie) => (
          <div key={movie.id} className='col-md-4 mb-4 movie-list'>
            <div className='card shadow'>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <div className='card-body'>
                <h5 className='card-title'>{movie.title}</h5>
                <p className='card-text'>{movie.release_date}</p>
                <div className='row'>
                  <div className='col-md-6'>
                    <a
                      href={`https://api.themoviedb.org/3/movie/${movie.id}?api_key=17dfb2bb3935f937b92974d037cf4b4f`}
                      className='btn btn-primary btn-block'
                    >
                      Details
                    </a>
                  </div>
                  <div className='col-md-6'>
                    <a
                      className='btn btn-success btn-block'
                      onClick={() => {
                        addToWhitelist(movie.id);
                      }}
                    >
                      Add to Whitelist
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
