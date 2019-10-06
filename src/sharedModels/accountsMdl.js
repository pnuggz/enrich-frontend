import { updateUserSession } from "../lib/session"

import accountsApi from "../sharedApis/accountsApi";

export const accountsDataRequest = async () => {
  const userData = sessionStorage.getItem("userData");
  const jsonUserInfo = JSON.parse(userData);

  try {
    const fetch = await accountsApi.get(jsonUserInfo);
    const response = await fetch.json()

    if (response.status.code === 200) {
      updateUserSession(response)
    }

    return response;
  } catch (error) {
    return error;
  }
};

export const accountSelectedRequest = async accountId => {
  const userData = sessionStorage.getItem("userData");
  const jsonUserInfo = JSON.parse(userData);

  try {
    const fetch = await accountsApi.getSelected(jsonUserInfo, accountId);
    const response = await fetch.json()

    if (response.status.code === 200) {
      updateUserSession(response)
    }

    return response;
  } catch (error) {
    return error;
  }
}