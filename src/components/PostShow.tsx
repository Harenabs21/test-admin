import {Show, SimpleShowLayout,TextField, RichTextField, ReferenceField, Button} from "react-admin"




function PostShow() {
  return (
    <Show>
        <SimpleShowLayout>
        <TextField source="id" />
            <TextField source="title" />
            <ReferenceField source="userId" reference="users">             
              <TextField source="name" />
            </ReferenceField>
            <RichTextField source="body" />
            <Button label="See comments" />
        </SimpleShowLayout>
    </Show>
  )
}

export default PostShow