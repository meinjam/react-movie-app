import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <Link to='/' className='navbar-brand smooth-scroll'>
          <h1 className='d-inline align-middle'>MovieApp</h1>
        </Link>
        <button
          className='navbar-toggler navbar-toggler-right'
          type='button'
          data-toggle='collapse'
          data-target='#navbarCollapse'
        >
          <span className='navbar-toggler-icon'>
            <i className='fas fa-bars'></i>
          </span>
        </button>
        <div className='collapse navbar-collapse' id='navbarCollapse'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link to='/' className='nav-link smooth-scroll'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link smooth-scroll'>
                Whitelist
              </a>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link smooth-scroll'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-link smooth-scroll'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
