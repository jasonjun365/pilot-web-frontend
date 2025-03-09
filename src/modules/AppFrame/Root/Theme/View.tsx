import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface PropTypes { // states
  lightOpen: boolean
  children: React.ReactNode
}

const Root: React.FC<PropTypes> = ({ lightOpen, children }) => {
  const mode = lightOpen ? 'light' : 'dark';

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: `var(--${mode}-background-bg-0)`,
          },
        },
      }),
    [lightOpen],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Root;