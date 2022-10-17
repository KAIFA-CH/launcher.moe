import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import colortheme from '../components/theme';
const theme = extendTheme({config: {initialColorMode: 'dark'}, colortheme});

function newapp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}
  
export default newapp