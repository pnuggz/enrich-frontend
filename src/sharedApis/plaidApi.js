import config from "../config";

const baseUrl = config.enrichApi.baseUrl;

const url = baseUrl + "/account/token";

export const plaidTokenApi = jsonUserInfo => {
  const jwtToken = jsonUserInfo.token

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${jwtToken}`
    },
    body: JSON.stringify(jsonUserInfo)
  });
};
