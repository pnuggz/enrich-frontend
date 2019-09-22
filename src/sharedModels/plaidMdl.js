import { plaidTokenApi } from "../sharedApis/plaidApi";

export const plaidTokenRequest = jsonUserInfo => {
  try {
    const fetch = plaidTokenApi(jsonUserInfo);

    return fetch;
  } catch (error) {
    return error;
  }
};
