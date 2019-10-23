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

const postNotificationStatus = (jsonUserInfo, notificationId) => {
  const url = baseUrl + "/notification/status";

  const jwtToken = jsonUserInfo.token;

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    },
    body: JSON.stringify({notificationId: notificationId})
  });
};

const notificationsApi = {
  getAll: getAll,
  postNotificationStatus: postNotificationStatus
};

export default notificationsApi;
