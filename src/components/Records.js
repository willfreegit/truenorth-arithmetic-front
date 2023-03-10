import React, { useState, useEffect } from "react";
import { MDBDataTable } from 'mdbreact';
import AuthService from "../services/auth.service";
import RecordsService from "../services/records.service";
import TemporalParse from "../util/TemporalParse";

/**
 * @author wmonge - 03/2023
 * @returns 
 */
const columnsInit = [
  {
    label: 'Operation',
    field: 'operation',
    sort: 'asc',
    width: 150
  },
  {
    label: 'Amount',
    field: 'amount',
    sort: 'asc',
    width: 270
  },
  {
    label: 'User Balance',
    field: 'userBalance',
    sort: 'asc',
    width: 200
  },
  {
    label: 'Operation Response',
    field: 'operationResponse',
    sort: 'asc',
    width: 100
  },
  {
    label: 'Date Operation',
    field: 'dateOperation',
    sort: 'asc',
    width: 150
  },
  {
    label: 'Action',
    field: 'deleteButton',
    sort: 'asc',
    width: 150
  }
];

const Records = () => {
  const [data, setData] = useState({columns: columnsInit, rows: []});
  const currentUser = AuthService.getCurrentUser();

  const deleteRecord = (e) =>{
    RecordsService.deleteRecord(e, currentUser.token).then(
      (response) => {
        if(response){
          loadRecords();
        }
      }
    );
  }

  const loadRecords = () =>{
    const page = 0;
    const size = 1000;
    const filters = null;
    RecordsService.getRecords(page, size, filters, currentUser.id, currentUser.token).then(
      (response) => {
        if(response.data){
          let array = [];
          let newArray = [];
          array = response.data.records;
          for(const x of array){
            x.operation = TemporalParse.parseCodeToName(x.operationId);
            x.deleteButton = <button className="btn btn-primary" 
                                     onClick={() => {if (window.confirm('Are you sure you wish to delete this item?')) deleteRecord(x.id)}}>Delete</button>;
            newArray.push(x);
          }
          setData({columns: columnsInit, rows:newArray});
        }
      }
    );
  }

  useEffect(() => {
    loadRecords();
  }, []);

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
      noBottomColumns={true} 
    />
  );
};

export default Records;
