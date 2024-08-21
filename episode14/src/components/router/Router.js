import { createBrowserRouter, Outlet } from "react-router-dom";

import MainContainer from "../mainContainer";
import WatchPage from "../watchPage";
import SideBar from "../SideBar";
import Header from "../header/Header";
import SearchPage from "../searchPage";
import LiveVideoContainer from "../mainContainer/videoContainer/liveVideoContainer";


const Layout = () => {
  return (
    <div>
      <Header /> 
     <SideBar/>
          <main>
            <Outlet />
          </main>
    </div>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
         { path: "/", element: <MainContainer /> },
        { path: "watch", element: <WatchPage /> },
        { path: "search", element: <SearchPage /> },
      {path:  "live", element: <LiveVideoContainer/>}
    ],
  },
]);

export default Router;
