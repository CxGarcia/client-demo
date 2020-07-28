import React from "react";
import { Admin, Resource } from "react-admin";
import { ClientList, ClientInfo, ClientCreate, ClientEdit } from "./Clients";
import UserIcon from "@material-ui/icons/People";
import { dataProvider } from "../../utils/dataProvider";

// import { editById } from "../../utilities/editById";
// import { getSnapshot } from "../../utilities/getSnapshot";

function AdminPanel() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="clients"
        icon={UserIcon}
        list={ClientList}
        show={ClientInfo}
        create={ClientCreate}
        edit={ClientEdit}
      />
    </Admin>
  );
}

export default AdminPanel;
