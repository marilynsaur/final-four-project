import { Link } from "react-router-dom";


function Nav() {
  
  return (
    <nav>
      <div class="topnav">
     <Link  to="/">Home</Link>
     <Link  to="/Login">Login</Link>
     <Link  to="/createcraft">Create a new Craft</Link>
     </div>
    </nav>
    
  );
}

export default Nav;