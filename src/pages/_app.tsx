import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global-style';
import { AppProps } from 'next/app';
import { theme } from '@/styles/theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleFonts } from 'next-google-fonts';

export default function RootLayout({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
