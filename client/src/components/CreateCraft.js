import { Link } from "react-router-dom";
import { useState } from "react";


function CreateCraft({ clickCrafts,onAddCraft }) {
//   const { id, title, materials, difficulty, image, directions } = clickCrafts;

  

  const initialState = {
    title: "",
    image: "",
    materials: "",
    directions: "",
    image: "",
    difficulty: ""
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
    fetch("/homemades", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newCraft) => {
        setFormData(initialState);
        onAddCraft(newCraft);
      });
  }
  

  return (
    <div className="card" >
          <form onSubmit={handleSubmit} >
        <label >Title: </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="image">Image URL: </label>
        <input
          type="text"
          id="image"
          value={formData.image}
          onChange={handleChange}
        />
        <label htmlFor="notes">Materials: </label>
        <input
          type="text"
          id="materials"
          value={formData.materials}
          onChange={handleChange}
        />
        <label htmlFor="directions">Directions: </label>
        <textarea
          id="directions"
          value={formData.directions}
          onChange={handleChange}
        />
        <label htmlFor="Difficulty">Difficulty: </label>
        <textarea
          id="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateCraft;


