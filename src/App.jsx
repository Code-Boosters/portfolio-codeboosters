import React from "react";
import ButtonWhatsApp from "./components/atoms/ButtonWhatsApp/ButtonWhatsApp";
import ButtonUp from "./components/atoms/ButtonUp/ButtonUp";
import LanguageSubmenu from "./components/atoms/ButtonLanguaje/ButtonLanguaje";
import ButtonModeToggle from "./components/atoms/ButtonModeToggle/ButtonModeToggle";
import ScrollToSection from "./components/atoms/ScrollToSection/ScrollToSection";
import Github from "./components/atoms/github/Github";
import Preview from "./components/atoms/preview/Preview";
import Facebook from "./components/atoms/Facebook/Facebook";
import { ThemeProvider } from "./context/ThemeContext";
import Prueba from "./components/atoms/Prueba/Prueba";

const App = () => {
  return (
    <ThemeProvider>
      <div className="app-container">
        {/* Header */}
        <header className="flex justify-between items-center py-4 px-8 bg-red-600 dark:bg-gray-800 w-full transition-colors duration-300">
          <h1 className="text-3xl font-bold underline text-center py-2 text-white">
            Hello world!
          </h1>

          <div className="flex justify-center items-center gap-4">
            <LanguageSubmenu />
            <ButtonModeToggle />
          </div>
        </header>

        {/* Main Content */}
        <main>


          <div className="content-placeholder h-[3000px] p-4 dark:bg-gray-800 transition-colors duration-300">
            <p className="text-black dark:text-white">Contenido largo para hacer scroll...</p>
                      <ScrollToSection targetId="proyectos" label="Ver Proyectos" />
          
          <div className="social-links flex items-center gap-2 mt-4 justify-center">
            <Facebook url="https://facebook.com" />
            <Github url="https://github.com/miguelortiz-code/bienes-raices" />
            <Preview url="https://google.com/" />
            <Prueba  />
          </div>
          </div>
          
        </main>

        {/* Fixed Action Buttons */}
        <ButtonWhatsApp phoneNumber={3154488668} />
        <ButtonUp />
      </div>
    </ThemeProvider>
  );
};

export default App;