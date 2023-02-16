
import { Link } from "react-router-dom";
import Homemades from "./Homemades";



function Craft({ allTheCraft,handleAddReview}) {
 
  // const reviewItems= allTheCraft.reviews.map((review) => (
  //   <Homemades key={review.id} review={review} />
  // ));

 

  return (
   <div class="card">
    <homemades key={allTheCraft.id}>
      <div class="center" >
      <br></br>
    
   
      <br></br>
      <h3>
        {allTheCraft.title}
        <br></br>
        <br></br>
        <Link to={`/homemades/${allTheCraft.id}`}> <img src={allTheCraft.image}  /></Link>
      </h3>
      <br></br>
      </div>
      {/* {allTheCraft.reviews.map((review) => (
       
       <div  key={review.id}>
      <p>Craft Review: {review.reviews}</p>
    </div>
  ))} */}
   
    </homemades>
   
    <br></br>
    {/* {reviewItems} */}
  
    <br></br>
  
    </div>
  );
}

export default Craft;


