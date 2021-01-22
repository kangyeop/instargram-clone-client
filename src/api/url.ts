export const GithubLoginRequest = `${process.env.REACT_APP_API_URL}oauth2/authorization/github?finalRedirectUri=${process.env.REACT_APP_DOMAIN}/loginloading`;
export const GoogleLoginRequest = `${process.env.REACT_APP_API_URL}oauth2/authorization/google?finalRedirectUri=${process.env.REACT_APP_DOMAIN}/loginloading`;
export const SignUpRequest = `${process.env.REACT_APP_API_URL}api/v1/members/signup`;
