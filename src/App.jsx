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
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    const appleStatusBarMeta = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    const lightColor = "#ffffff";
    const darkColor = "#121212";

    if (darkMode) {
      document.documentElement.classList.add('dark');
      if (themeColorMeta) themeColorMeta.setAttribute("content", darkColor);
      if (appleStatusBarMeta) appleStatusBarMeta.setAttribute("content", "black-translucent");
    } else {
      document.documentElement.classList.remove('dark');
      if (themeColorMeta) themeColorMeta.setAttribute("content", lightColor);
      if (appleStatusBarMeta) appleStatusBarMeta.setAttribute("content", "default");
    }
  }, [darkMode]);

  return (
    <main className='bg-white dark:bg-[#121212] '>
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
