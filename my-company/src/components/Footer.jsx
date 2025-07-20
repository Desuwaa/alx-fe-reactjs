function Footer() {
  return (
    <footer
      style={{
        padding: '10px 20px',
        borderTop: '1px solid #ddd',
        textAlign: 'center',
      }}
    >
      © {new Date().getFullYear()} My Company
    </footer>
  );
}

export default Footer;
