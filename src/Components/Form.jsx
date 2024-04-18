function Form(props) {
  return (
    <div className="formContainer">
      <form className="form">
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

        <button id="createItem" onClick={props.createItem}>
          Create Item
        </button>
        <button id="resetForm" onClick={props.resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
}
export default Form;
