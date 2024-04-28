import React, { useRef } from "react";

function Form(props) {
  const formRef = useRef(null);

  // Submit handler for input reset on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    props.createItem();
    formRef.current.reset();
  };

  return (
    <div className="formContainer">
      <form ref={formRef} className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item"
          onChange={(e) => props.setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          onChange={(e) => props.setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height (cm)"
          onChange={(e) => props.setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Width (cm)"
          onChange={(e) => props.setWidth(e.target.value)}
        />
        <input
          type="number"
          placeholder="Length (cm)"
          onChange={(e) => props.setLength(e.target.value)}
        />

        <button id="createItem" type="submit">
          Create Item
        </button>
        <button id="resetForm" type="button" onClick={props.resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default Form;
