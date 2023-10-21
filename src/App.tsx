import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/Form";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

function App() {


  const [post, setPost] = useState({title: "", body: ""})

  useEffect( () => {
    axios.get(baseURL).then( (response) => {
      setPost(response.data)
    } )
  }, [] )

  return (
    <>
      <div>
        <Form />
      </div>
    </>
  );
}

export default App;
