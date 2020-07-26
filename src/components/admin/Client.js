import React from "react";
// import EditPanel from "./EditPanel";

function Client({ id, fullname, email, onRemove, onEdit }) {
  function removeClient() {
    onRemove(id);
  }

  function openEditPanel() {
    console.log("open edit panel");
  }

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{fullname}</td>
      <td>{email}</td>
      <td>
        <button className="edit-action" onClick={openEditPanel} id={id}>
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

/*
        MUST WRAP EVERYTHING IN A DIV
        <tr>
        <EditPanel id={id} fullname={fullname} email={email} onEdit={onEdit} />
      </tr> */
