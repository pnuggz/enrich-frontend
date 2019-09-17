import config from "../config";

const baseUrl = config.enrichApi.baseUrl;

const url = baseUrl + "/signup/";

export const signupApi = signupData => {
  const data = `username=${encodeURI(
    signupData.username.value
  )}&email=${encodeURI(signupData.email.value)}&password=${encodeURI(
    signupData.password.value
  )}&password_salt=${encodeURI(signupData.password_salt.value)}`;

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: data
  });
};
