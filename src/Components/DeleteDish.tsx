import React, { useState } from "react";






function DeleteDish() {

  const [selectedDishId, setSelectedDishId] = useState("");

  




  function onClickHandeler() {

    if (selectedDishId === null) {

      alert("Please! Select a dish");

      return;

    }



    fetch("https://localhost:7070/api/Dishes/" + selectedDishId, {

      headers: {

        'Accept': 'application/json',

        'Content-Type': 'application/json'

      },

      mode: 'cors',

      method: 'DELETE'

    })

    setSelectedDishId("");

  }




  return <div>

    <h2>Delete Dish</h2>


    <input
    placeholder = "Enter dish id"
    onChange = {(e) => setSelectedDishId(e.target.value)}
    value = {selectedDishId}
    />
    <br/>
    <button type="button"

  

      onClick={onClickHandeler}

    >Delete</button>

  </div>

}




export default DeleteDish;