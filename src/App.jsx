import { Routes, Route } from "react-router";
import routes from "./routes/routes.jsx";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        {routes.map((route, index) => {
          return <Route key={index} path={route.path} element={route.element} />;
        })}
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
