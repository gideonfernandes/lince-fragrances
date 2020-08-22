export function loadTokenRequest() {
  return {
    type: '@auth/LOAD_TOKEN_REQUEST',
  };
};

export function loadTokenSuccess() {
  return {
    type: '@auth/LOAD_TOKEN_SUCCESS',
  };
};

export function registerRequest(userData) {
  return {
    type: '@auth/REGISTER_REQUEST',
    userData,
  };
};

export function loginRequest(userData) {
  return {
    type: '@auth/LOGIN_REQUEST',
    userData,
  };
};

export function authSuccess(token) {
  return {
    type: '@auth/SUCCESS',
    token,
  };
};

export function logout() {
  return {
    type: '@auth/LOGOUT',
  };
};