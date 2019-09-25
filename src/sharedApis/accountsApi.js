import config from "../config";

const baseUrl = config.enrichApi.baseUrl;

const url = baseUrl + "/account/";

const get = jsonUserInfo => {
  const jwtToken = jsonUserInfo.token;
  const userData = jsonUserInfo.data.user;
  const userId = userData.id;
  const jwtSub = userData.email;

  return fetch(url + userId, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
      Subject: jwtSub
    }
  });
};

const accountsApi = {
  get: get
};

export default accountsApi;
