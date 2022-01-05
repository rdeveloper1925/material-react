import React, { useState } from "react";
import { Button } from "react-bootstrap";

const initialCol = {
  colName: "",
  dataType: "",
  isNull: false,
  isPk: false,
  isUnique: false,
};
const CreateResourceScreen = (props) => {
  const [resourceName, setResourceName] = useState("");
  const [col, setCol] = useState(initialCol);
  const [cols, setCols] = useState([]);

  const changeHandler = (e, name) => {
    let field = {};
    field[name] = e.target.value;
    setCol({
      ...col,
      ...field,
    });
  };

  const addToTable = () => {
    setCols([...cols, col]);
    setCol(initialCol);
  };

  const saveTable = () => {
    console.log(cols);
  };

  const removeCol = (index) => {
    setCols([...cols.slice(0, index), ...cols.slice(index + 1)]);
  };

  return (
    <div
      className="row bg-image"
      style={{
        backgroundImage:
          "url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg')",
        height: "100%",
      }}
    >
      <div className="col-12 mb-3">
        <h3 className="text-center">Create New Resource</h3>
      </div>
      <div className="col-md-6 col-xs-12">
        <div className="container">
          <div className="form-group mb-2">
            <label for="colName">Resource Name: </label>
            <input
              type="text"
              className="form-control"
              value={resourceName}
              onChange={(e) => setResourceName(e.target.value)}
            />
          </div>
          <div className="form-group mb-2">
            <label for="colName">Column Name </label>
            <input
              type="text"
              className="form-control"
              value={col.colName}
              onChange={(e) => changeHandler(e, "colName")}
            />
          </div>
          <div className="form-group mb-2">
            <label for="dataType">Data Type: </label>
            <select
              className="form-control"
              value={col.dataType}
              onChange={(e) => changeHandler(e, "dataType")}
            >
              <option>Select One</option>
              <option>Text</option>
              <option>Number</option>
              <option>Json</option>
              <option>Blob</option>
              <option>Float</option>
            </select>
          </div>
          <div className="form-group mb-2">
            <label>
              <input
                type="checkbox"
                checked={col.isNull ? "checked" : ""}
                onChange={(e) => {
                  setCol({ ...col, isNull: !col.isNull });
                }}
              />{" "}
              Is Null
            </label>
          </div>
          <div className="form-group mb-2">
            <label>
              <input
                type="checkbox"
                checked={col.isPk ? "checked" : ""}
                onChange={(e) => {
                  setCol({ ...col, isPk: !col.isPk });
                }}
              />{" "}
              Is Primary Key
            </label>
          </div>
          <div className="form-group mb-2">
            <label>
              <input
                type="checkbox"
                checked={col.isUnique ? "checked" : ""}
                onChange={(e) => {
                  setCol({ ...col, isUnique: !col.isUnique });
                }}
              />{" "}
              Is Unique
            </label>
          </div>
          <Button onClick={addToTable} className="mb-5 form-control">
            Add Column{" "}
          </Button>
        </div>
      </div>
      <div className="col-md-6 col-xs-12 px-2 my-2">
        <div className="container">
          <h6 className="text-center text-bold">
            <strong>{resourceName}</strong>
          </h6>
          <table className="table table-bordered">
            <thead>
              <tr>
                <td>Column Name</td>
                <td>Data Type</td>
                <td>Is Null</td>
                <td>Is Primary Key</td>
                <td>Is Unique</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {cols.map((col, index) => {
                return (
                  <tr key={index}>
                    <td>{col.colName}</td>
                    <td>{col.dataType}</td>
                    <td>{col.isNull ? "Is Null" : "Not Null"}</td>
                    <td>{col.isPk ? "Is Primary Key" : "Not Primary Key"}</td>
                    <td>{col.isUnique ? "Is Unique" : "Not Unique"}</td>
                    <td>
                      <Button variant="danger" onClick={() => removeCol(index)}>
                        Remove
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Button onClick={saveTable} className="mb-5 form-control">
            Save Resource
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateResourceScreen;
