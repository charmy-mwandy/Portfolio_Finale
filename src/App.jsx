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
      <main className="pt-20 xl:pt-0 xl:ml-56 px-4 xl:px-0">
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
