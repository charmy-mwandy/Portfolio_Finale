import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './maincomponents/home';
import About from './maincomponents/about';
import Work from './maincomponents/work';
import Contact from './maincomponents/contact';
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Content Area */}
      <main className="pt-20 lg:pt-0 lg:ml-64 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
