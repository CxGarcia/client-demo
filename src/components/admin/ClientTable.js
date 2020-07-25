import React from "react";
import Client from "./Client";

function ClientTable({ clients, onRemove }) {
  let header;

  if (clients[0]) {
    const cl = clients[0];
    const keys = Object.keys(cl);
    header = keys.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  const tableData = clients.map((client, index) => {
    const { id, fullname, email } = client;
    return (
      <Client
        id={id}
        fullname={fullname}
        email={email}
        key={index}
        onRemove={onRemove}
      />
    );
  });

  return (
    <div>
      <h1 id="title">React Dynamic Table</h1>
      <table id="clients">
        <tbody>
          <tr>{header}</tr>
          {tableData}
        </tbody>
      </table>
    </div>
  );
}

export default ClientTable;
