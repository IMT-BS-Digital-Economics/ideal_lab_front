import '../../styles/globals.css';
import '../../styles/font.css';

import Head from 'next/head';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: `Rubik, sans-serif`, // Use Rubik for headings
        body: `Rubik, sans-serif`,
    },
});

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <title>Ideal Lab</title>
            </Head>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}

export default MyApp;
