import { checkAuthorizationApi } from "../sharedApis/checkAuthorizationApi";

export const checkAuthorizationRequest = async authData => {
  try {
    const fetch = await checkAuthorizationApi(authData);

    return fetch;
  } catch (error) {
    return error;
  }
};
