import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Founder from "./Components/Founder";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Blogs from "./Components/Blogs";
import { HashRouter, Routes, Route } from "react-router-dom";

// Main App component
function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Work />
                <Testimonial />
                <Founder />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
