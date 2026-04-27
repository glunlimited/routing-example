import "../css/Footer.css";
const Footer = () => {
  return (
    <div className="footerWrapper">
      <footer>
      <p>&copy; {new Date().getFullYear()} G & L Unlimited. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;