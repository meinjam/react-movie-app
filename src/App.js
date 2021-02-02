import { useState } from 'react';
import Search from './components/Search';

const App = () => {
  const [movies, setMovies] = useState(null);
  const [inputName, setInputName] = useState('');

  const forInputName = (e) => {
    setInputName(e.target.value);
    if (e.target.value === '') {
      setMovies(null);
    } else if (inputName !== '') {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=17dfb2bb3935f937b92974d037cf4b4f&language=en-US&query=${inputName}&page=1&include_adult=false`
      )
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          // console.log(data.results);
          setMovies(data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // console.log(setMovies);
  };

  // Add to whitelist
  const addToWhitelist = (id) => {
    console.log(id);
  };

  return (
    <div className='App'>
      <div className='container pt-5'>
        <input
          type='text'
          className='form-control'
          onChange={forInputName}
          placeholder='Search by name'
        />
      </div>
      {movies && <Search movies={movies} addToWhitelist={addToWhitelist} />}
    </div>
  );
};

export default App;
