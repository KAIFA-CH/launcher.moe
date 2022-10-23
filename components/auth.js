import { Alert, AlertIcon, AlertTitle, useColorMode } from '@chakra-ui/react';
import { useUser, useSessionContext } from '@supabase/auth-helpers-react';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';

const AuthPopup = () => {
  const { error, supabaseClient } = useSessionContext();
  const user = useUser();
  const { colorMode } = useColorMode()

  if (!user) {
    return (
      <>
        {error && <Alert status='error'><AlertIcon /><AlertTitle>{error}</AlertTitle></Alert>}
        <Auth
          redirectTo="http://localhost:3000/"
          appearance={{ theme: ThemeSupa }}
          supabaseClient={supabaseClient}
          socialColors
          theme={colorMode}
        />
      </>
    );
  }
};

export default AuthPopup;