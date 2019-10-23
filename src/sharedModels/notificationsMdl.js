import checkAuthorization from "../lib/check-auth"

import notificationsApi from "../sharedApis/notificationsApi";

const checkAuthPromise = () => {
  return new Promise(res => {
    const result = checkAuthorization()
    res(result)
  })
}

export const getAllNotifications = async () => {
  const userData = sessionStorage.getItem("userData");
  const jsonUserInfo = JSON.parse(userData);

  const auth = await checkAuthPromise()
  if (!auth) {
    return {
      status: {
        code: 500
      }
    }
  }

  try {
    const fetch = await notificationsApi.getAll(jsonUserInfo);
    const response = await fetch.json()

    return response;
  } catch (error) {
    return error;
  }
};