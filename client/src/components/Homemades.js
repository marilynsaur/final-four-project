
import { useEffect, useState } from "react";
 import { useParams } from "react-router-dom";


function Homemades({handleAddReview}) {
  const [craft, setCraft] = useState([]);
  const [reviews, setReviews] = useState([]);
  const {id} = useParams();
  


 
  

    useEffect(() => {
      fetch(`/homemades/${id}`)
        .then((r) => r.json())
        .then(setCraft);
    }, [id]);

   
    useEffect(() => {
      fetch("/reviews")
        .then((r) => r.json())
        .then(setReviews);
    }, [id]);
  

    const initialState = {
      rating: "",
      reviews: "",
      homemade_id: id
    };
  
  
    const [formData, setFormData] = useState(initialState);
  
      function handleChange(e) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  
  
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((r) => r.json())
        .then((newReview) => {
          setFormData(initialState);
          handleAddReview(newReview);
        });
    }
  
  
  

   



  return (
    // <detailedcraft>
    //   <h1>{title}</h1>
    //   <small>
    //     <p>
    //   {materials} {difficulty} 
    //     </p>
    //     <p>
    //     <img src={image} />
    //     </p>
    //   </small>
    
    // </detailedcraft>
    <homemades>
      <div class="card">
        
       
      <div class="center">
      <h1 style={{fontSize: "10px"}}>
      
        <h1>{craft.title}</h1>
        <img src={craft.image} />
        directions:
        <h1>{craft.directions}</h1>
        reviews:
        {reviews.map((review) => (
       
       <div  key={review.id}>
      <p>Craft Review: {review.reviews}</p>
    </div>

    
  ))}
      </h1>
      
      <div className="card" >
          <form onSubmit={handleSubmit} >
        <label >rating: </label>
        <input
          type="text"
          id="rating"
          value={formData.rating}
          onChange={handleChange}
        />
       
        <label htmlFor="notes">reviews: </label>
        <input
          type="text"
          id="reviews"
          value={formData.reviews}
          onChange={handleChange}
        />
       
        <button type="submit">Submit</button>
      </form>
    </div>
      </div>
      </div>
   
    
      </homemades>
  );
}

export default Homemades;
