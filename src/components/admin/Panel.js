import React, { useEffect, useState } from "react";
import { getCollection } from "../../utilities/getCollection";
import { firestore } from "firebase";
import ClientTable from "./ClientTable";
import deleteById from "../../utilities/deleteById";

function Panel() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    //Get collection of clients from Firestore
    getCollection("clients").then((clients) => setClients(clients));
  }, []);

  function handleRemove(id) {
    const clientArr = [...clients];
    //Delete from Firestore
    deleteById("clients", id);

    //Filter arr to set new state
    const filteredClients = clientArr.filter((client) => id !== client.id);
    setClients(filteredClients);
  }

  return (
    <div>
      <ClientTable clients={clients} onRemove={handleRemove} />
    </div>
  );
}

export default Panel;
