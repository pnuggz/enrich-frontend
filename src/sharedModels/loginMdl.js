import { loginApi } from "../sharedApis/loginApi";

export const loginRequest = loginData => {
  try {
    const fetch = loginApi(loginData);

    return fetch;
  } catch (error) {
    return error;
  }
};
