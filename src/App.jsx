import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <main className='bg-slate-300/20 dark:bg-slate-900/95'>
      <Router>
        <Navbar toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
