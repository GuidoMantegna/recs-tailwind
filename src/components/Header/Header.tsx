import { useContext } from "react";
import { AuthContext } from "context";
import { Link } from "react-router-dom";

const Header = () => {
  const user = useContext(AuthContext)
  return (
    <header className="flex justify-between items-center p-5">
      <p className="font-bold  text-2xl">🎥 RECS</p>
      <div>
        <p className="text-lg mr-4">{user?.name}</p>
        <p className="text-lg mr-4">{user?.email}</p>
        <p className="text-lg mr-4">{user?.role}</p>
        <Link to='login' className="text-lg mr-4 custom-link">Login</Link>
        <Link to='sign-up' className="text-lg custom-link">Sign up</Link>
      </div>
    </header>
  );
}

export default Header;