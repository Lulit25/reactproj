import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
var arr = [];
var result=[];
var detail =[];
const config = {
    apiKey: "AIzaSyAelZ_3JiyBho5ZV_ekTGWZAeDAZGZowRA",
    authDomain: "react-project-c0899.firebaseapp.com",
    databaseURL: "https://react-project-c0899.firebaseio.com",
    projectId: "react-project-c0899",
    storageBucket: "",
    messagingSenderId: "103005594932",
    appId: "1:103005594932:web:19869f155a90e435"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  var ref = firebase.database().ref('clients');
  ref.on('value', function(snapshot){
    arr = snapshot.val();
    getInfo(arr);

  });

function getInfo(ar){
    
  result = ar;
  const TableRow = ({row}) => (
    <tr>
      <td key={row.id} onClick ={()=>getDetail(row.additionalInfo)}>{row.id}</td>
      <td key={row.name}>{row.name}</td>
      <td key={row.age}>{row.age}</td>
    </tr>
   )

   const Table = ({data}) => (
     <table cellpadding="10">
        <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        </tr>
        {data.map(row => 
          <TableRow row={row} />
        )}
     </table>
   )

  ReactDOM.render(
    <Table data={result} />, 
    document.getElementById("root")
  );

}

function getDetail(detaill){

  detail.push(detaill);
  console.log(detail);
  console.log(result);
  const TableRow = ({row}) => (

  <tr>
    <td key={row.address}>{row.address} </td>
    <td key={row.company}>{row.company}</td>
    <td key={row.email}>{row.email}</td>
    <td key={row.phone}>{row.phone}</td>
  </tr>
  )

  const Table = ({data}) => (
    <table cellpadding="10">
     <tr>
      <th>Address</th>
      <th>Company</th>
      <th>Email</th>
      <th>Phone</th>
     </tr>
      {data.map(row => 
        <TableRow row={row} />
      )}
    </table>
  )

  ReactDOM.render(
    <Table data={detail} />, 
    document.getElementById("root")
  );

}



