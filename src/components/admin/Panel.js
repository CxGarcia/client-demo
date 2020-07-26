import React, { useEffect, useState } from "react";
import ClientTable from "./ClientTable";
import firebase from "../../firebase/index";
import { getCollection } from "../../utilities/getCollection";
import { deleteById } from "../../utilities/deleteById";
import { collectIdsAndDocs } from "../../utilities/collectIdsAndDocs";

// import { editById } from "../../utilities/editById";
// import { getSnapshot } from "../../utilities/getSnapshot";

function Panel() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    //Get realtime updates of clients from Firestore
    let unsubscribe;

    (async function updateChanges() {
      const db = firebase.firestore();
      unsubscribe = db.collection("clients").onSnapshot((snapshot) => {
        const clients = snapshot.docs.map(collectIdsAndDocs);
        setClients(clients);
      });
    })();

    //unsubscribe from listener
    return function cleanup() {
      unsubscribe();
    };
  }, []);

  function handleRemove(id) {
    //Delete from Firestore
    deleteById("clients", id);
  }

  // function handleEdit(id, updateObj) {
  //   //Update document by ID with new data passed in the updateObj
  //   //TODO panel for edit
  //   console.log(updateObj);
  //   // editById("clients", id, updateObj);
  // }

  function handleSort() {
    const clientArr = [...clients];

    //TODO sort by event target value
    // const sortBy = event.target.value;
    const sortBy = "fullname";

    const sortedArr = clientArr.sort((a, b) =>
      a[sortBy].toUpperCase() > b[sortBy].toUpperCase()
        ? 1
        : b[sortBy].toUpperCase() > a[sortBy].toUpperCase()
        ? -1
        : 0
    );

    setClients(sortedArr);
  }

  return (
    <div>
      <button onClick={handleSort}>Sort</button>
      <ClientTable
        clients={clients}
        onRemove={handleRemove}
        // onEdit={handleEdit}
      />
    </div>
  );
}

export default Panel;
