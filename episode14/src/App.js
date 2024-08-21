import { RouterProvider } from "react-router-dom";
import Router from "./components/router/Router";
import Store from "./common/redux/Store";
import { Provider } from "react-redux";
function App() {
  return (
    <div className="px-4 pt-4 overflow-hidden">
      <Provider store={Store}>
        <RouterProvider router={Router} />
      </Provider>
    </div>
  );
}

export default App;
