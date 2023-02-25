
import { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route,useParams } from "react-router-dom";

import Homemades from "./Homemades";
import Home from "./Home";
import Nav from "./Nav";
import Login from "./Login";
import Craft from "./Craft";
import PostReviews from "./PostReviews";
import CreateCraft from "./CreateCraft";
import Signup from "./Signup";



    function App() {

      const [crafts, setCrafts] = useState([]);
      const [clickCrafts, setClickCrafts] = useState([]);
      const [user, setUser] = useState(null);
      const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

      

  useEffect(() => {
    fetch("/homemades")
      .then((r) => r.json())
      .then(setCrafts);
  }, []);

  console.log(crafts)

 
  
  
 
  
    useEffect(() => {
        fetch("/reviews")
          .then((r) => r.json())
          .then((reviews) => setReviews(reviews));
      }, []);
       
    console.log(reviews);





  function handleClick(allTheCraft) {
    setClickCrafts(allTheCraft);
  }

  function handleAddCraft(addedCraft) {
    setCrafts((crafts) => [...crafts, addedCraft]);
  }
  

 


  function handleAddReview(newReview) {
    console.log("a new item:", newReview);
    let allReviews=[...reviews,newReview]
    setReviews(allReviews)
  }





      return (
        <div  >
        <div >
       
          {/* <Header user={user} onLogout={handleLogout}/> */}
       <Nav  user={user} setUser={setUser}/>
      
  {user ? (
    <Switch>
      <Route path="/">
        <Home user={user} crafts={crafts} handleClick={handleClick}/>
      </Route>
    </Switch>
  ) : (
    <Switch>
      <Route path="/signup">
        <Signup setUser={setUser} />
      </Route>
      <Route path="/login">
        <Login setUser={setUser} onLogin={handleLogin}/>
      </Route>
     
    </Switch>
  )} 
        <Switch>
          <Route exact path="/homemades/:id">
            <Homemades />
          </Route>
          <Route exact path="/createcraft">
            <CreateCraft onAddCraft={handleAddCraft}  craftItems={crafts}/>
          </Route>
          <Route exact path="/craft">
            <Craft handleAddReview={handleAddReview}/>
          </Route>
          <Route exact path="/PostReviews">
            <PostReviews craftsy={crafts} onAddReview={handleAddReview}  />
          </Route>
        </Switch>
      </div>
      </div>
      );
    }


export default App;


{/* <NavBar user={user} setUser={setUser} />
<main>
  {user ? (
    <Switch>
      <Route path="/">
        <Home user={user}/>
      </Route>
    </Switch>
  ) : (
    <Switch>
      <Route path="/signup">
        <SignUp setUser={setUser} />
      </Route>
      <Route path="/login">
        <Login setUser={setUser} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )} */}