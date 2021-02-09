import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function App() {
  //add useState for all state variables
  const [myInfo, setMyInfo] = useState([]);
  const [inputInfo, setInputInfo] = useState({ name: "", gender: "", age: "" });
  //load locationStorage

  useEffect(() => {
    const items = localStorage.getItem("items");
    // ...
    if (items != null) {
      setMyInfo(JSON.parse(items));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(myInfo));
  }, [myInfo]);

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Person</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="e.q John Smith"
            //update related state based on event
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <select className="input" type="text" placeholder="Please select ..">
            <option value="" disabled selected hidden>
              -- Select Gender --
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input className="input" type="number" placeholder="e.q 30"></input>
        </div>

        <button className="button is-primary is-fullwidth">Submit</button>

        <div className="mb-4"></div>

        {/* display tables for all persons */}
        <p className="is-4 title has-text-centered">Person List</p>
        {/* sample table */}
        <ItemTable name={"Bob"} gender={"Male"} age={"45"} />
        {myInfo.map((item) => {
          return (
            <ItemTable name={item.name} gender={item.gender} age={item.age} />
          );
        })}
        <p>Satayu Settakit 620610809</p>
      </div>
    </div>
  );
}

export default App;
