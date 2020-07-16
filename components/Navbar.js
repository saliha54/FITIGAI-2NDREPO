import Link from 'next/link';

const Navbar = () => (
  <section id='header'>
    <div className='menu-bar'>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <img
          src='/images/fitigai_logo.png'
          alt='logo'
          style={{ width: '60px', height: '60px', borderRadius: '35px' }}
        />
        <a className='navbar-brand mx-3' href='#'>
          Fitigai
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <Link href='/'>
                <a className='nav-link'>
                  Home <span className='sr-only'>(current)</span>
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/about'>
                <a className='nav-link'>About</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/contact'>
                <a className='nav-link'>Contact</a>
              </Link>
            </li>
          </ul>
          <Link href='/login'>
            <button className='btn btn-outline-primary '>Login</button>
          </Link>
          <Link href='/register'>
            <button className='btn btn-outline-success ml-2'>Register</button>
          </Link>
        </div>
      </nav>
    </div>
    <style jsx>
      {`
        .menu-bar {
          background: #151b8d;
        }
        .navbar-brand {
          color: #fff;
        }
        .navbar-brand:hover {
          color: red;
        }
        .nav-item .nav-link {
          font-size: 20px;
          color: #fff;
          margin: 2px;
        }
        .nav-item .nav-link:hover {
          color: red;
        }
        .navbar-toggler-icon {
          color: #fff;
        }
        .menu-bar .navbar-toggler {
          padding-right: 0;
          outline: none;
          border: none;
        }
      `}
    </style>
  </section>
);
export default Navbar;
