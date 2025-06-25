import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './maincomponents/home';
import About from './maincomponents/about';
import Work from './maincomponents/work';
import Contact from './maincomponents/contact';
import Navbar from "./components/navbar";


function App() {
  return ( <BrowserRouter>
  <Navbar />

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Work" element={<Work />} />
      <Route path="/Contact" element={<Contact />} />

    </Routes>

  
  </BrowserRouter>  
  );
}

export default App;

// function App() {

//   return (
//     <>
//       <h1 className='text-fuchsia-600'>Hello</h1>
//     </>
//   )
// }

// export default App
