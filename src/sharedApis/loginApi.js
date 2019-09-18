import config from "../config";

const baseUrl = config.enrichApi.baseUrl;

const url = baseUrl + "/login/";

export const loginApi = loginData => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginData)
  });
};
