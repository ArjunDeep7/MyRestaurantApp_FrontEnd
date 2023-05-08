import React, { useState } from "react";






function DeleteCategory() {

  const [selectedCatId, setSelectedCatId] = useState("");

  




  function onClickHandeler() {

    if (selectedCatId === null) {

      alert("Please! Select a dish");

      return;

    }



    fetch("https://localhost:7070/api/Categories/" + selectedCatId, {

      headers: {

        'Accept': 'application/json',

        'Content-Type': 'application/json'

      },

      mode: 'cors',

      method: 'DELETE'

    })

    setSelectedCatId("");

  }




  return <div>

    <h2>Delete Category</h2>


    <input
    placeholder = "Enter Category id"
    onChange = {(e) => setSelectedCatId(e.target.value)}
    value = {selectedCatId}
    />
    <br/>
    <button type="button"

  

      onClick={onClickHandeler}

    >Delete</button>

  </div>

}




export default DeleteCategory;