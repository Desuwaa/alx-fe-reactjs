import { Link } from 'react-router-dom';

const linkStyle = {
  marginRight: '15px',
  textDecoration: 'none',
  color: '#333',
};

function Navbar() {
  return (
    <nav style={{ padding: '10px 20px', borderBottom: '1px solid #ddd' }}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/about" style={linkStyle}>
        About
      </Link>
      <Link to="/services" style={linkStyle}>
        Services
      </Link>
      <Link to="/contact" style={linkStyle}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
