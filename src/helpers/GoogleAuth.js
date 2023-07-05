import React, { useContext } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { googleAuth } from 'networking/Apis/googleAuth';
import jwt_decode from 'jwt-decode';
import { UserDataContext } from 'providers/UserDataProvider';
import { useNavigate } from 'react-router-dom';

const GoogleAuth = () => {
  const navigate = useNavigate();

  const { setUserData } = useContext(UserDataContext);

  const googleAuthorization = async (data) => {
    try {
      const response = await googleAuth(data);
      console.log(response);
      if (response.status === 200 && response.data.type === 'success') {
        console.log(response, 'api response');
        localStorage.setItem('authToken', response.data.accessToken);
        setUserData(response.data.user);
        navigate('/');
      }
    } catch (error) {}
  };

  return (
    <div
    //   style={{
    //     display: 'flex',
    //     flex: '1',
    //     height: '40px',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}
    >
      <GoogleOAuthProvider clientId="937427365123-h1p3ba56o6ocjsgeiepmavn4n5mqje3o.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const decode = jwt_decode(credentialResponse.credential);
            googleAuthorization({
              full_name: decode.name,
              email: decode.email,
              type: 1,
            });
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleAuth;
