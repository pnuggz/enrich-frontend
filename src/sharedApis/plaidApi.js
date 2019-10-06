import config from "../config";

const baseUrl = config.enrichApi.baseUrl;

const url = baseUrl + "/account/token";

export const plaidTokenApi = jsonUserInfo => {
  const jwtToken = jsonUserInfo.token;
  const jwtSubj = jsonUserInfo.email;

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
      Subject: jwtSubj
    },
    body: JSON.stringify(jsonUserInfo)
  });
};
