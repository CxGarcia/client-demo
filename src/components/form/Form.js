import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import { storage, editById, addCollection } from "../../utils/firebase";
import "./Form.css";

function Form() {
  const [prospect, setProspect] = useState({});
  const [file, setFile] = useState({});

  function handleProspect(event) {
    event.preventDefault();

    setProspect({ ...prospect, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const collection = "clients";

    const Id = await addCollection(collection, prospect).then((res) => res.id);

    console.log(Id);
    // editById("clients", Id, prospect);

    const downloadURL = await storage
      .ref()
      .child(collection)
      .child(Id)
      .child("file")
      .put(file)
      .then((res) => res.ref.getDownloadURL());

    editById(collection, Id, { url: downloadURL });
  }

  function handleChange(file) {
    // console.log(event.target.file);
    if (!file) return;

    let blob = new Blob(file, { type: "application/pdf" });
    // console.warn(file); // Watch Screenshot
    console.log(blob);

    setFile(blob);
  }
  // function getFile() {}

  return (
    <div className="form">
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
        <input
          type="text"
          name="company"
          placeholder="Company"
          onChange={handleProspect}
        />
        <input
          type="text"
          name="adress"
          placeholder="Address"
          onChange={handleProspect}
        />
        <input
          type="file"
          onChange={(event) => handleChange(event.target.files)}
          name="file"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
