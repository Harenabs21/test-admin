import { Datagrid, List,ReferenceField,TextField } from "react-admin"



export default function PostList() {
  return (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <ReferenceField source="userId" reference="users">             
              <TextField source="name" />
            </ReferenceField>
        </Datagrid>
    </List>
  )
}