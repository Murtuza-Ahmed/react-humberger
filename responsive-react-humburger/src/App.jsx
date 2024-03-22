import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { About, Home, Services, Contact } from "./components/pages";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
export default App;
