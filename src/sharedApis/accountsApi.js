import config from "../config";

const baseUrl = config.enrichApi.baseUrl;

const getAllByInstitutionId = (jsonUserInfo, institutionId) => {
  const url = baseUrl + "/account/institution/" + institutionId;

  const jwtToken = jsonUserInfo.token;

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    }
  });
};

const getUserByInstitutionId = (jsonUserInfo, institutionId) => {
  const url = baseUrl + "/account/institution/" + institutionId + "/user";

  const jwtToken = jsonUserInfo.token;

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    }
  });
};

const postNew = (jsonUserInfo, basiqInstitutionId, accounts) => {
  const url = baseUrl + "/account";

  const jwtToken = jsonUserInfo.token;

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    },
    body: JSON.stringify({
      basiqInstitutionId: basiqInstitutionId,
      accounts: accounts
    })
  });
};

const accountsApi = {
  getAllByInstitutionId: getAllByInstitutionId,
  getUserByInstitutionId: getUserByInstitutionId,
  postNew: postNew
};

export default accountsApi;
