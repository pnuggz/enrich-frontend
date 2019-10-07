import config from "../config";

const baseUrl = config.enrichApi.baseUrl;

export const plaidTokenApi = (jsonUserInfo, plaidLinkState) => {
  const url = baseUrl + "/account/token";
  const jwtToken = jsonUserInfo.token;

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`
    },
    body: JSON.stringify(plaidLinkState)
  });
};
