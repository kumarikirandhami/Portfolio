import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Experience from './component/Experience';
import InteractiveResume from './component/InteractiveResume';
import Resume from './component/Resume';
import Contact from './component/Contact';
import DarkModeToggle from './component/DarkModeToggle';
import { useTheme } from './context/ThemeContext';
import { themes } from './config/theme';

const AppContent: React.FC = () => {
  const { theme, isDarkMode } = useTheme();
  const currentTheme = themes[theme] || themes.blue; // Fallback to blue theme if current theme is invalid

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? currentTheme.dark.background : currentTheme.light.background
    }`}>
      <Navbar />
      <DarkModeToggle />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <InteractiveResume />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
