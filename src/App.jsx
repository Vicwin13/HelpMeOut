import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import SaveVideo from "./components/SaveVideo";
import Videos from "./components/Videos";

// import Record from "./components/Record";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/videos/:videoId",
    element: <SaveVideo />,
  },
  {
    path: "/videos",
    element: <Videos />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
