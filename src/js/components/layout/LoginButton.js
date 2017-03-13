import React from 'react';
import oauthApi from '../../api/oauthApi';

const LoginButton = () => {
    const url = oauthApi.getAuthorizeURL();
    return (<a href={url} className="login-btn"/>);
};
export default LoginButton;
