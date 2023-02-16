
import { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route,useParams } from "react-router-dom";
import Header from "./Header";
import Homemades from "./Homemades";
import Home from "./Home";
import Nav from "./Nav";
import Login from "./Login";
import Craft from "./Craft";
import CreateCraft from "./CreateCraft";



    function App() {

      const [crafts, setCrafts] = useState([]);
      const [clickCrafts, setClickCrafts] = useState(null);

      

  useEffect(() => {
    fetch("/homemades")
      .then((r) => r.json())
      .then(setCrafts);
  }, []);

  console.log(crafts)

  const [reviews, setReviews] = useState([]);
  
  
 
  
    useEffect(() => {
        fetch("/reviews")
          .then((r) => r.json())
          .then((reviews) => setReviews(reviews));
      }, []);
       
    console.log(reviews)





  function handleClick(allTheCraft) {
    setClickCrafts(allTheCraft);
  }

  function handleAddCraft(addedCraft) {
    setCrafts((crafts) => [...crafts, addedCraft]);
  }
  

  function handleAddReview(newReviews) {
    console.log("a new Review:", newReviews);
    let allReviews=[...reviews,newReviews]
    setReviews(allReviews)
  }




      return (
        <div  className="app">
       
          <Header />
       <Nav/>
        <Switch>
          <Route exact path="/homemades/:id">
            <Homemades handleAddReview={handleAddReview}/>
          </Route>
          <Route exact path="/login">
            <Login  />
          </Route>
          <Route exact path="/createcraft">
            <CreateCraft onAddCraft={handleAddCraft} clickCrafts={clickCrafts} craftItems={crafts}/>
          </Route>
          <Route exact path="/craft">
            <Craft handleAddReview={handleAddReview}/>
          </Route>
          <Route exact path="/">
            <Home crafts={crafts} handleClick={handleClick} />
          </Route>
        </Switch>
      </div>
    
      );
    }


export default App;


  // <Route exact path="/homemades">
      
  //         <section>
  //         {crafts.map((craft) => (
  //            <Craft 
  //             key={craft.id}
  //             craft={craft}
  //           />
  //         ))}
  //       </section>
  //       </Route>