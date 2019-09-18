import config from "../config";

const baseUrl = config.enrichApi.baseUrl;

const url = baseUrl + "/signup/";

export const signupApi = async signupData => {
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(signupData)
  });
};
