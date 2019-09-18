import { checkAuthorizationApi } from "../sharedApis/checkAuthorizationApi";

export const checkAuthorizationRequest = authData => {
  try {
    const fetch = checkAuthorizationApi(authData);

    return fetch;
  } catch (error) {
    return error;
  }
};
