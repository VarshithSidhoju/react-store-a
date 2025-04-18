import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { appContext } from "../App";
export default function Header() {
  const { user, setUser, cart } = useContext(appContext);
  return (
    <div className="App-Header-Row">
      <h1>My React Store</h1>
      <div className="App-Header-Links">
        <Link to="products" className="App-Header-Link">
          Home
        </Link>
        <Link to="Orders" className="App-Header-Link">
          Orders
        </Link>
        <Link to="cart" className="App-Header-Link">
          Cart({Object.keys(cart).length})
        </Link>
        {user.email === "" ? (
          <Link to="login" className="App-Header-Link">
            Login
          </Link>
        ) : (
          <Link
            to="login"
            className="App-Header-Link"
            onClick={() =>
              setUser({ ...user, name: "", email: "", password: "" })
            }
          >
            Logout
          </Link>
        )}
      </div>
    </div>
  );
}