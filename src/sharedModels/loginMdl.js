import { updateUserSession } from "../lib/session"

import loginApi from "../sharedApis/loginApi";

export const loginRequest = async loginData => {
  try {
    const fetch = await loginApi.submit(loginData);
    const response = await fetch.json()

    if (response.status.code === 200) {
      updateUserSession(response)
    }

    return response;
  } catch (error) {
    return error;
  }
};
