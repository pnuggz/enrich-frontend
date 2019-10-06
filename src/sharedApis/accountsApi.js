import config from "../config";

const baseUrl = config.enrichApi.baseUrl;

const get = jsonUserInfo => {
  const url = baseUrl + "/account";

  const jwtToken = jsonUserInfo.token;
  const jwtSub = jsonUserInfo.email;

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
      Subject: jwtSub
    }
  });
};

const getSelected = (jsonUserInfo, accountId) => {
  const url = baseUrl + "/account/" + accountId;

  const jwtToken = jsonUserInfo.token;
  const jwtSub = jsonUserInfo.email;

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
      Subject: jwtSub
    }
  });
}

const accountsApi = {
  get: get,
  getSelected: getSelected
};

export default accountsApi;
