import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

function App() {
  return (
    <>
      <h1>This is home page</h1>
      <HelmetProvider>
        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </HelmetProvider>
    </>
  );
}

export default App;
