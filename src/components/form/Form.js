import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { addCollection } from "../../utilities/addCollection";

import Panel from "../admin/Panel";

function Form() {
  const [prospect, setProspect] = useState({});
  // const { register, handleSubmit, errors } = useForm({
  //   // mode: "onBlur",
  // });

  function handleProspect(event) {
    event.preventDefault();

    setProspect({ ...prospect, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    addCollection("clients", prospect);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="fullname"
          placeholder="Name"
          onChange={handleProspect}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleProspect}
        />
        <button type="submit">Submit</button>
      </form>

      <Panel />
    </div>
  );
}

export default Form;
