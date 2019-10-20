import config from "../config";

const baseUrl = config.enrichApi.baseUrl;

const getAll = jsonUserInfo => {
  const url = baseUrl + "/institution/all";

  const jwtToken = jsonUserInfo.token;

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    }
  });
};

const getByUser = jsonUserInfo => {
  const url = baseUrl + "/institution/user";

  const jwtToken = jsonUserInfo.token;

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    }
  });
};

const postUserInstitution = (jsonUserInfo, institutionData) => {
  const url = baseUrl + "/institution/user";

  const jwtToken = jsonUserInfo.token;

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    },
    body: JSON.stringify(institutionData)
  });
};

const institutionsApi = {
  getAll: getAll,
  getByUser: getByUser,
  postUserInstitution: postUserInstitution
};

export default institutionsApi;
