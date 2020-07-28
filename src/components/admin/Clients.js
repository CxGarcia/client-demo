import React from "react";
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  EmailField,
  FileField,
  ImageField,
} from "react-admin";

const ClientFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>
);

export const ClientList = (props) => (
  <List {...props} filters={<ClientFilter />}>
    <Datagrid>
      <TextField source="fullname" />
      <EmailField source="email" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const ClientInfo = (props) => {
  console.log(props);

  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="fullname" />
        <EmailField source="email" />
        <FileField
          source="url"
          title="sample-upload"
          target="_blank"
          download={true}
        />
        <ImageField source="url" src="url" />
      </SimpleShowLayout>
    </Show>
  );
};

export const ClientCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="fullname" />
      <EmailField source="email" />
    </SimpleForm>
  </Create>
);

export const ClientEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="fullname" />
      <EmailField source="email" />
    </SimpleForm>
  </Edit>
);
