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

const institutionsApi = {
  getAll: getAll,
  getByUser: getByUser
};

export default institutionsApi;
