import React from "react";

//TODOOO

function ClientPanel({ id, fullname, email, onEdit }) {
  function editClient(event) {
    event.preventDefault();
    console.log(event.target);

    const newObj = { [event.target.name]: event.target.value };

    onEdit(id, newObj);
  }

  return (
    <div>
      <form onSubmit={editClient}>
        <input type="text" defaultValue={id} name="id" />

        <input type="text" defaultValue={fullname} name="fullname" />

        <input type="text" defaultValue={email} name="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ClientPanel;
