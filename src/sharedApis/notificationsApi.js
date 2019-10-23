import config from "../config";

const baseUrl = config.enrichApi.baseUrl;

const getAll = jsonUserInfo => {
  const url = baseUrl + "/notification/all";

  const jwtToken = jsonUserInfo.token;

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    }
  });
};

const notificationsApi = {
  getAll: getAll
};

export default notificationsApi;
