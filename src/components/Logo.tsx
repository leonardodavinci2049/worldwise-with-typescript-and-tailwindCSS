import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src="/logo.png" alt="WorldWise logo" className=""/>
    </Link>
  );
}

export default Logo;
