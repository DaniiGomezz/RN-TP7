import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Theme {
  background: string;
  text: string;
}

interface Themes {
  light: Theme;
  dark: Theme;
}

const themes: Themes = {
  light: {
    background: '#ffffff',
    text: '#000000',
  },
  dark: {
    background: '#000000',
    text: '#ffffff',
  },
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setThemeName((prevThemeName) => (prevThemeName === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[themeName], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
