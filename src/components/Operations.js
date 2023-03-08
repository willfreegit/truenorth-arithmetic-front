import React, { useEffect, useState } from "react";
import AuthService from "../services/auth.service";
import OperationsService from "../services/operations.service";
import Toast from 'react-bootstrap/Toast';
import TemporalParse from "../util/TemporalParse";

/**
 * @author wmonge - 03/2023
 * @returns 
 */
const Operations = () => {
  const [balance, setBalance] = useState(0);
  const [operation, setOperation] = useState(false);
  const [result, setResult] = useState(false);
  const [show, setShow] = useState(false);
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  const [value, setValue] = useState(0);
  const [size, setSize] = useState(0);

  useEffect(() => {
    OperationsService.getBalanceByUser(currentUser.id, currentUser.token).then(
      (response) => {
        setBalance(response.data);
      }
    );
  }, []);

  const currentUser = AuthService.getCurrentUser();
  const callAPI = (e) => {
    let operationId = 0;
    operationId = TemporalParse.parseNameToCode(e);
    OperationsService.mathOperations(operationId === 6 ? value : valueA, 
      valueB, size, operationId, operationId === 6 ? "STRING" : "NUMBER", 
      currentUser.id, currentUser.token).then(
      (response) => {
        setShow(true);
        setOperation(e);
        setResult('ERROR');
        if(response.data){
          const values = response.data;
          if(values.code === 200){
            setResult(values.data);
            setBalance(values.balance);
          } 
        }
      }
    );

  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          Arithmetic Operations
        </h3>
        <h4>User's Balance: </h4>
        ${balance}
      </header>
      <p hidden={true}>
        {currentUser.id}
      </p>
      <p hidden={true}>
        {currentUser.token}
      </p>
      <table cellPadding="35px">
        <thead>
          <tr>
            <th scope="col">Basic Arithmetic Operations</th>
            <th scope="col">Advance Arithmetic Operations</th>
            <th scope="col">External String Generator</th>
          </tr>
        </thead>
        <tbody>
          <tr className="myForm">
            <td bgcolor='#50b1e4'>
              <p>VALUE A: <input value={valueA} onChange={e => setValueA(e.target.value)}></input></p>
              <p>VALUE B:  <input value={valueB} onChange={e => setValueB(e.target.value)}></input></p>
              <p>
                <button onClick={() => callAPI('ADDITION')}>ADD (+)</button>
                <button onClick={() => callAPI('SUBTRACTION')}>SUB (-)</button>
                <button onClick={() => callAPI('MULTIPLICATION')}>MUL (x)</button>
                <button onClick={() => callAPI('DIVISION')}>DIV (/)</button></p>
            </td>
            <td bgcolor='#dee450'>
              <p>VALUE: <input value={value} onChange={e => setValue(e.target.value)}></input></p>
              <p><button onClick={() => callAPI('SQUARE ROOT')}>SQUARE ROOT</button></p>
            </td>
            <td bgcolor='#009157'>
              <p>STRING SIZE: <input value={size} onChange={e => setSize(e.target.value)}></input></p>
              <p><button onClick={() => callAPI('RANDOM STRING')}>GENERATE</button></p>
            </td>
          </tr>
        </tbody>

      </table>
      <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
        <Toast.Header closeButton={false}>
          <strong className="me-auto">Result</strong>
          <small className="me-auto">{operation}</small>
        </Toast.Header>
        <Toast.Body>{result}</Toast.Body>
      </Toast>

    </div>
  );
};

export default Operations;
