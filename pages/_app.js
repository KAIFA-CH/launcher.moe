import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React, { useState } from 'react';
import colortheme from '../components/theme';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import '../components/main.css';
const theme = extendTheme({config: {initialColorMode: 'dark', disableTransitionOnChange: false}, colors: colortheme});
import NavHead from '../components/navhead';

function newapp({ Component, pageProps}) {
    const [supabaseClient] = useState(() => createBrowserSupabaseClient());

    return (
        <SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}>
            <ChakraProvider theme={theme}>
                <NavHead />
                <Component {...pageProps} />
            </ChakraProvider>
        </SessionContextProvider>
    )
}

export default newapp