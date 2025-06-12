import { createContext, useContext, useEffect, useState } from "react";

const THEME = {
  DARK: 'dark',
  LIGHT: 'light'
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme ? savedTheme === THEME.DARK : systemPrefersDark;
  });

  useEffect(() => {
    const htmlElement = document.documentElement;
    
    if (isDark) {
      htmlElement.classList.add(THEME.DARK);
      localStorage.setItem('theme', THEME.DARK);
    } else {
      htmlElement.classList.remove(THEME.DARK);
      localStorage.setItem('theme', THEME.LIGHT);
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};