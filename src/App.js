import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<h1>Contact</h1>}/>
      <Route path="*" element={<h1>Page not found</h1>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;