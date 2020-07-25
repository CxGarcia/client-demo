import React from "react";

function Client({ id, fullname, email, onRemove }) {
  function removeClient() {
    onRemove(id);
  }

  function editClient() {
    console.log("edit");
  }

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{fullname}</td>
      <td>{email}</td>
      <td>
        <button className="remove-action" onClick={editClient} id={id}>
          Edit
        </button>
      </td>
      <td>
        <button className="remove-action" onClick={removeClient}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Client;
