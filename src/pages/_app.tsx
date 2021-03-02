import { FC, useState } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/global';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} toggleTheme={toggleTheme} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
