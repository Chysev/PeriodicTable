import { useState } from 'react';
import type { AppProps } from 'next/app'
import { useColorScheme } from '@mantine/hooks';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';

// Layout
import Layout from '@/components/Layout';

// GLOBAL CSS
import "@/global/global.css"

export default function App({ Component, pageProps }: AppProps) {

  // Themes
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS withCSSVariables>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
