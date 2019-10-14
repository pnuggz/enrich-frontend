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
};

const submit = (jsonUserInfo, selectedAccountsData) => {
  console.log(selectedAccountsData);
  const url = baseUrl + "/account/";

  const jwtToken = jsonUserInfo.token;
  const jwtSub = jsonUserInfo.email;

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
      Subject: jwtSub
    },
    body: JSON.stringify(selectedAccountsData)
  });
};

const accountsApi = {
  get: get,
  getSelected: getSelected,
  submit: submit
};

export default accountsApi;
