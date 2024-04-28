import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Result from "./Result";
import UserItem from "./UserItem";
import Form from "./Form";

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

  // Remove user input
  const removeItem = (id) => {
    setData(data.filter((data) => data.id !== id));
  };

  // Reset whole form
  const resetForm = () => {
    setData([]);
  };

  return (
    <div className="container">
      <div className="calculatorContainer">
        <Form
          setName={setName}
          setWeight={setWeight}
          setHeight={setHeight}
          setWidth={setWidth}
          setLength={setLength}
          createItem={createItem}
          resetForm={resetForm}
        />

        <UserItem data={data} removeItem={removeItem} />
      </div>
      <Result data={data} />
    </div>
  );
}
export default CalculatorContainer;
