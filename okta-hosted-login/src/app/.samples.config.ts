export default {
  oidc: {
    clientId: '0oai1gohhtcxbBjLv0h7',
    issuer: 'https://dev-323697.oktapreview.com/oauth2/default',
    redirectUri: 'localhost:4200/implicit/callback',
    scope: 'openid profile email groups',
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};
