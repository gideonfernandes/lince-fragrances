function auth(state = {
  isAuthenticated: false,
  loading: true,
}, action) {
  switch (action.type) {
    case '@auth/SUCCESS':
      localStorage.setItem('token', action.token);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };

    case '@auth/LOAD_TOKEN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };
    case '@auth/LOGOUT':
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  };
};

export default auth;
