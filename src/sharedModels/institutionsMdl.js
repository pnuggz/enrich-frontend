import { updateUserSession } from "../lib/session"

import institutionsApi from "../sharedApis/institutionsApi";

export const getAllInstitutions = async () => {
  const userData = sessionStorage.getItem("userData");
  const jsonUserInfo = JSON.parse(userData);

  try {
    const fetch = await institutionsApi.getAll(jsonUserInfo);
    const response = await fetch.json()

    if (response.status.code === 200) {
      updateUserSession(response)
    }

    return response;
  } catch (error) {
    return error;
  }
};

export const getUserInstitutions = async () => {
  const userData = sessionStorage.getItem("userData");
  const jsonUserInfo = JSON.parse(userData);

  try {
    const fetch = await institutionsApi.getByUser(jsonUserInfo);
    const response = await fetch.json()

    if (response.status.code === 200) {
      updateUserSession(response)
    }

    return response;
  } catch (error) {
    return error;
  }
};

export const postUserInstitution = async (institutionData) => {
  const userData = sessionStorage.getItem("userData");
  const jsonUserInfo = JSON.parse(userData);

  try {
    const fetch = await institutionsApi.postUserInstitution(jsonUserInfo, institutionData);
    const response = await fetch.json()

    if (response.status.code === 200) {
      updateUserSession(response)
    }

    return response;
  } catch (error) {
    return error;
  }
};