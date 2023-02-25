import { Link } from "react-router-dom";



function Nav({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <h1>
        <Link to="/">Craftsy</Link>
      </h1>
      <div>
        {user ? (
          <div>
            <p>Welcome, {user.username}!</p>
          <button onClick={handleLogoutClick}>Logout</button>
          </div>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <br></br>
            <br></br>
            <Link to="/login">Click here to Login</Link>
          </>
        )}
      </div>
    </header>
  );
}


export default Nav;

