import { Link } from "react-router-dom";
import { useState } from "react";


function PostReview({ onAddReview,allTheCraft}) {
  
  console.log(allTheCraft);
  
  
 
 
const [formReview, setFormReview] = useState({
  rating:"",
  reviews:""
  
 

 

});
  


function handleSubmitPostReview(e) {
e.preventDefault();

fetch("/reviews", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(reviewData),
})
  .then((r) => r.json())
  .then((newReview) => onAddReview(newReview));
}

const reviewData = {
  "rating":formReview.rating,
  "reviews":formReview.reviews
};

const handleChangePostReview =(e)=> {
e.preventDefault();
setFormReview((formReview) =>{
return {...formReview,
[e.target.name]: e.target.value}

})

}

  return (
    <div>
          <form onSubmit={handleSubmitPostReview} >
        <label >Rating: </label>
        <input
          type="text"
          id="rating"
          name="rating"
          value={formReview.rating}
          onChange={ handleChangePostReview}
        />
        <label htmlFor="review">Review: </label>
        <input
          type="text"
          id="reviews"
          name="reviews"
          value={formReview.reviews}
          onChange={ handleChangePostReview}
        />
      
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostReview;


