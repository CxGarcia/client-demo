import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import { editById, addCollection, putFiles } from "../../utils/firebase";
import "./Form.css";
import Signature from "./Signature";

function Form() {
  const [prospect, setProspect] = useState({});
  const [files, setFiles] = useState([]);

  function handleProspect(event) {
    event.preventDefault();

    setProspect({ ...prospect, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const collection = "clients";
    const id = await addCollection(collection, prospect).then((res) => res.id);
    editById("clients", id, prospect);
    const fileUrl = await putFiles(files.pdf, collection, id, "pdf");
    const signatureUrl = await putFiles(
      files.signature,
      collection,
      id,
      "signature"
    );
    editById(collection, id, { pdf: fileUrl, signature: signatureUrl });
  }

  function handleChange(file) {
    if (!file) return;

    //convert file to Blob
    let blob = new Blob(file, { type: "application/pdf" });
    setFiles({ ...files, pdf: blob });
  }

  async function handleSignature(file) {
    if (!file) return;

    const blob = await fetch(file.trimmedDataURL).then((res) => res.blob());
    setFiles({ ...files, signature: blob });
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
          required
        />
        <p>Sign Here</p>
        <Signature signature={handleSignature} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
