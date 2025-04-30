'use client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '@/lib/theme';
import { useState } from 'react';
import Header from '@/component/Header';
import Footer from '@/component/Footer';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <html lang="en">
      <body >
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}