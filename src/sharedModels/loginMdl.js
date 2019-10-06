<<<<<<< HEAD
import { updateUserSession } from "../lib/session"
=======
import loginApi from "../sharedApis/loginApi";
>>>>>>> f4aa67a2f769680f416cdf71973ce40f7653d17c

import loginApi from "../sharedApis/loginApi";

export const loginRequest = async loginData => {
  try {
<<<<<<< HEAD
    const fetch = await loginApi.submit(loginData);
    const response = await fetch.json()

    if (response.status.code === 200) {
      updateUserSession(response)
    }
=======
    const fetch = loginApi.submit(loginData);
>>>>>>> f4aa67a2f769680f416cdf71973ce40f7653d17c

    return response;
  } catch (error) {
    return error;
  }
};
