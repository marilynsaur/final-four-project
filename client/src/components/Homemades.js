
import { useEffect, useState } from "react";
 import { useParams } from "react-router-dom";
 import CreateAccount from "./CreateAccount";
 import PostReviews from "./PostReviews";
 


 const initialState = {
  craftArticle: null,
  error: null,
  status: "pending",
};

function Homemades({}) {
  const [{ craftArticle, error, status }, setState] = useState(initialState);
  const [craft, setCraft] = useState([]);
  const [reviews, setReviews] = useState([]);
 
  const {id} = useParams();
  


 
  

    

    useEffect(() => {
      setState(initialState);
      fetch(`/homemades/${id}`).then((r) => {
        if (r.ok) {
          r.json().then((craftArticle) =>
            setState({ craftArticle, error: null, status: "resolved" })
          );
        } else {
          r.json().then((message) =>
            setState({ craftArticle: null, error: message.error, status: "rejected" })
          );
        }
      });
    }, [id]);
  
    if (status === "pending") return <h1>Loading...</h1>;
  
    if (status === "rejected") {
      if (error === "Maximum pageview limit reached") {
        return <CreateAccount />;
      } else {
        return <h1>{error}</h1>;
      }
    }









   
    // useEffect(() => {
    //   fetch("/reviews")
    //     .then((r) => r.json())
    //     .then(setReviews);
    // }, [id]);
  

    
  
    // const initialState = {
    //   rating: "",
    //   reviews: "",
    //   homemade_id: id
      
    // };
  
  
    // const [formData, setFormData] = useState(initialState);
  
    //   function handleChange(e) {
    //   setFormData({
    //     ...formData,
    //     [e.target.id]: e.target.value,
    //   });
    // }
  
  
  
    // function handleSubmit(e) {
    //   e.preventDefault();
    //   fetch("/reviews", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   })
    //     .then((r) => r.json())
    //     .then((newCraft) => {
    //       setFormData(initialState);
    //       handleAddReview(newCraft);
    //     });
    // }
    
 
    const { title, image, directions } = craftArticle;


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
      
        <h1>{title}</h1>
        <img src={image} />
        directions:
        <h2>{directions}</h2>
        reviews:
        {craftArticle.reviews.map((review) => (
       
       <div  key={review.id}>
      <h2>Craft Review: {review.reviews}</h2>
     
    </div>

    
  ))}
      </h1>
      <PostReviews />
     
      </div>
      </div>
   
    
      </homemades>
  );
}

export default Homemades;
