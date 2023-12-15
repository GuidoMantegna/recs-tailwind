import { Link } from "react-router-dom";

const Header = () => {;
  return (
    <header className="flex justify-between items-center p-5">
      <p className="font-bold  text-2xl">🎥 RECS</p>
      <div>
        <Link to='/login' className="text-lg mr-4 custom-link">Login</Link>
        <Link to='/sign-up' className="text-lg custom-link">Sign up</Link>
      </div>
    </header>
  );
}

export default Header;