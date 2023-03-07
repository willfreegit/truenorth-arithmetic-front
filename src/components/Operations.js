import React, { useState } from "react";
import AuthService from "../services/auth.service";

const Operations = () => {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  const [value, setValue] = useState(0);
  const [size, setSize] = useState(0);

  const currentUser = AuthService.getCurrentUser();
  const callAPI = (e) => {
    }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          Arithmetic Operations
        </h3>
      </header>
      <p hidden='true'>
        {currentUser.id}
      </p>
      <p hidden='true'>
        {currentUser.token}
      </p>
      <table cellpadding="35px">
        <tr>
          <th scope="col">Basic Arithmetic Operations</th>
          <th scope="col">Advance Arithmetic Operations</th>
          <th scope="col">External String Generator</th>
        </tr>
        <tr className="myForm">
          <td bgcolor='#50b1e4'>
            <p><h4>VALUE A :</h4> <input value={valueA}></input></p>
            <p><h4>VALUE B: </h4> <input value={valueB}></input></p>
            <p>
              <button onClick={()=>callAPI()}>ADD (+)</button>
              <button>SUB (-)</button>
              <button>MUL (x)</button>
              <button>DIV (/)</button></p>
          </td>
          <td bgcolor='#dee450'>
            <p><h4>VALUE:</h4> <input></input></p>
            <p><button>SQUARE ROOT</button></p>
          </td>
          <td bgcolor='#009157'>
            <p><h4>STRING SIZE: </h4> <input></input></p>
            <p><button>GENERATE</button></p>
          </td>
        </tr>
      </table>
      


    </div>
  );
};

export default Operations;
