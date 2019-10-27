import config from "../config";

const baseUrl = config.enrichApi.baseUrl;

const url = baseUrl + "/login/";

const submit = loginData => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginData)
  });
};

const refreshData = jsonUserInfo => {
  const url = baseUrl + "/auto/login/user";

  const jwtToken = jsonUserInfo.token;

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    }
  });
};

const loginApi = {
  submit: submit,
  refreshData: refreshData
};

export default loginApi;
