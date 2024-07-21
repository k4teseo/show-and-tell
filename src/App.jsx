import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import Navigation from "./components/Navigation.jsx";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

function Root() {
  return (
      <>
        <Navigation/>
        <Routes>
          <Route path="/About/*" element={<About/>}/>
          <Route path="/Resume/*" element={<Resume/>}/>
        </Routes>
      </>
  );
}

const router = createBrowserRouter(
  [{path:"*", Component: Root}]
)

export default function App() {

  return (
    <>
      <RouterProvider router={router}/>
      <Home/>
      <About/>
    </>
  )
}
