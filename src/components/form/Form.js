import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import { storage, editById, addCollection } from "../../utils/firebase";
import "./Form.css";
import Signature from "./Signature";

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

    // editById("clients", Id, prospect);
    console.log(file);

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
    if (!file) return;

    //convert file to Blob
    let blob = new Blob(file, { type: "application/pdf" });
    setFile(blob);
  }

  async function handleSignature(file) {
    if (!file) return;

    const blob = await fetch(file.trimmedDataURL).then((res) => res.blob());
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
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleProspect}
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          onChange={handleProspect}
          required
        />
        <input
          type="text"
          name="adress"
          placeholder="Address"
          onChange={handleProspect}
          required
        />
        <input
          type="file"
          onChange={(event) => handleChange(event.target.files)}
          name="file"
          // required
        />
        <p>Sign Here</p>
        <Signature signature={handleSignature} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
