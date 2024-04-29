import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import PostList from "./components/PostList"
import PostShow from "./components/PostShow"

export const App = () => <Admin dataProvider={dataProvider}>
  <Resource name="users" edit={EditGuesser} show={ShowGuesser}  list={ListGuesser} />
  <Resource name="posts"   list={PostList} show={PostShow} />
  <Resource name="comments" edit={EditGuesser} show={ShowGuesser}  list={ListGuesser} />
</Admin>;
