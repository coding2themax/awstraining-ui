'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#3b82f6', // blue-500
      light: '#60a5fa', // blue-400
      dark: '#2563eb', // blue-600
    },
    secondary: {
      main: '#6b7280', // gray-500
    },
    background: {
      default: '#ffffff',
      paper: '#f9fafb', // gray-50
    },
    text: {
      primary: '#1f2937', // gray-800
      secondary: '#6b7280', // gray-500
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
});

export default theme;
