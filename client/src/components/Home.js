
import Craft from "./Craft";
import PostReview from "./PostReviews";


function Home({crafts,handleClick}) {
  
  
 const craftItems= crafts.map((craft) => (
    <Craft key={craft.id} allTheCraft={craft} handleClick={handleClick} />
  ));

    

  return (
   <div>
   
   
   {/* <PostReview craftItems={craftItems} /> */}
   <div className="book-grid">{craftItems}</div>
   </div>
   
  );
}

export default Home;