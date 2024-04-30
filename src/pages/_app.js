import '../../styles/globals.css';
import '../../styles/font.css';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: `Rubik, sans-serif`, // Use Rubik for headings
        body: `Rubik, sans-serif`,
    },
});

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
