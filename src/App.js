import { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Single from './components/Single';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

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
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <div className='container py-5'>
              <input
                type='text'
                className='form-control'
                onChange={forInputName}
                placeholder='Search by name'
              />
            </div>
            {movies && (
              <Search movies={movies} addToWhitelist={addToWhitelist} />
            )}
          </Route>
          <Route path='/movie/:id'>
            <Single />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
