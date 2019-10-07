import { updateUserSession } from "../lib/session"

import { plaidTokenApi } from "../sharedApis/plaidApi";

export const plaidTokenRequest = async plaidLinkState => {
  const userData = sessionStorage.getItem("userData");
  const jsonUserInfo = JSON.parse(userData);

  try {
    const fetch = plaidTokenApi(jsonUserInfo, plaidLinkState);
    const response = await fetch.json()

    if (response.status.code === 200) {
      updateUserSession(response)
    }

    return response;
  } catch (error) {
    return error;
  }
};
