import React, { useState } from "react";
import "./Style.css";
import Result from "./Result";
import Application from "./Application";
const Fform = () => {
  const [data, setData] = useState({
    name: "",
    department: "",
    rating: "",
  });
  const [employees, setEmployees] = useState([]);
  const [toggle, setToggle] = useState("true");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    const newRecord = { ...data };
    setEmployees([...employees, newRecord]);
    setData({
      name: "",
      department: "",
      rating: "",
    });
    setToggle(!toggle);
  };

  let goBack = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <Application />
      {toggle ? (
        <div className="formContainer">
          <form onSubmit={handleButtonClick}>
            <div>
              <label className="label1">Name :</label>
              <input name="name" type="text" value={data.name}  onChange={handleChange}/>
            </div>
            <br />
            <div>
              <lable className="label2">Department :</lable>
              <input  name="department"  type="text"  value={data.department}  onChange={handleChange} / >
            </div>
            <br />
            <div>
              <lable className="label3">Rating :</lable>
              <input  name="rating" type="number" value={data.rating} onChange={handleChange}/>
            </div>
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <Result list={employees} goBack={() => goBack()} />
      )}
    </>
  );
};

export default Fform;
