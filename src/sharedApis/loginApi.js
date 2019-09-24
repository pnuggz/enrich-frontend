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

const loginApi = {
  submit: submit
}

export default loginApi