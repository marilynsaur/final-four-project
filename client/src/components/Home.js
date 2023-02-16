
import Craft from "./Craft";

function Home({crafts,handleClick}) {
  
  
 const craftItems= crafts.map((craft) => (
    <Craft key={craft.id} allTheCraft={craft} handleClick={handleClick} />
  ));

    

  return (
   <div>
   
  
   <div className="book-grid">{craftItems}</div>
   </div>
   
  );
}

export default Home;