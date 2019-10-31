import config from "../config";

const baseUrl = config.enrichApi.baseUrl;

const getAll = jsonUserInfo => {
  const url = baseUrl + "/institution/all";

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
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

const getByUserWithAcounts = jsonUserInfo => {
  const url = baseUrl + "/institution/user/accounts";

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
  getByUserWithAcounts: getByUserWithAcounts,
  postUserInstitution: postUserInstitution
};

export default institutionsApi;
