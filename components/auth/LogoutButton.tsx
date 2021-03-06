import React from 'react';
import { GoogleLogout } from 'react-google-login';
import GoogleButton from './GoogleButton';

function LogoutButton(props: {onLogout: () => void}) {
  return (
    <GoogleLogout
      clientId={process.env.GOOGLE_CLIENT_ID as string}
      onLogoutSuccess={() => props.onLogout()}
    />
  );
}

export default LogoutButton;
