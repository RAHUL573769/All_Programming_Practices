import { RouterProvider } from "react-router-dom";
import Header from "./Componenets/Header/Header";
import router from "./Componenets/router/router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
