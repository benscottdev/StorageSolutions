import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CalculatorContainer() {
  const [data, setData] = useState([]);

  //  States for all of the user input fields
  const [name, setName] = useState("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);

  // New item creation function
  const createItem = (e) => {
    e.preventDefault();
    let newItem = {
      id: uuidv4(),
      name: name,
      weight: weight,
      height: height,
      width: width,
      length: length,
    };
    setData([...data, newItem]);
  };

  // Remove Input
  const removeItem = (id) => {
    setData(data.filter((data) => data.id !== id));
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Item"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height (cm)"
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Width (cm)"
          onChange={(e) => setWidth(e.target.value)}
        />
        <input
          type="number"
          placeholder="Length (cm)"
          onChange={(e) => setLength(e.target.value)}
        />

        <button onClick={createItem}>Create Item</button>
      </form>
      {data.map((item, index) => {
        return (
          <div className="newItem" key={item.id}>
            <h1>{item.name}</h1>
            <h1>{item.weight}kg</h1>
            <h1>{item.height}cm</h1>
            <h1>{item.length}cm</h1>
            <h1>{item.width}cm</h1>

            <button
              onClick={() => {
                removeItem(item.id);
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default CalculatorContainer;
