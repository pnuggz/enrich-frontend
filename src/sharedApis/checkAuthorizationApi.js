import config from "../config";

const baseUrl = config.enrichApi.baseUrl;

const url = baseUrl + "/users/authenticate";

export const checkAuthorizationApi = userData => {
  const token = userData.token;

  return fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });
};
