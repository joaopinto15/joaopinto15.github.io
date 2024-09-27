import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects, PageNotFound } from "./pages";


const App = () => {
  //Manage dark mode state
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const getDarkMode = () => darkMode;
  //Set dark mode on page load
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <main className='bg-offWhite dark:bg-black-500 '>
      <Router>
        <Navbar toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About getDarkMode={getDarkMode} />} />
                  <Route path='/projects' element={<Projects getDarkMode={getDarkMode} />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='*' element={<PageNotFound />} />
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
