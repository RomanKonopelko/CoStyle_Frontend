const getIsAuthenticated = state => state.auth.isAutorized;

const getUsername = state => state.auth.user.name;

const getToken = state => Boolean(state.auth.token);

export { getIsAuthenticated, getUsername, getToken };
