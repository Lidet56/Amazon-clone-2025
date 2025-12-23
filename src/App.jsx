import { useContext, useEffect, useState } from "react";
import Routing from "./Router.jsx";
import { Type } from "./Utility/action.type.js";
import { auth } from "./Utility/firebase.js";
import { DataContext } from "./components/DataProvider/DataProvider.jsx";


function App() {
const [count, setCount] = useState(0)
 const [{user},dispatch] = useContext(DataContext)
  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
        dispatch({
  type: Type.SET_USER,
  user: authUser,
});
      }
else {
  dispatch({
    type: Type.SET_USER,
    user: authUser || null,
  });

      }
    });
  }, []);

  return (
    <>
    <Routing/>
    </>

  )
}

export default App
 