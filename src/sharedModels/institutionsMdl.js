import { updateUserSession } from "../lib/session"

import institutionsApi from "../sharedApis/institutionsApi";

export const getAllInstitutions = async () => {
  try {
    const fetch = await institutionsApi.getAll();
    const response = await fetch.json()

    if (response.status.code === 200) {
      updateUserSession(response)
    }

    return response;
  } catch (error) {
    return {
      status: {
        code: 500,
        error: error,
        message: `Internal server error.`
      }
    }
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
    return {
      status: {
        code: 500,
        error: error,
        message: `Internal server error.`
      }
    }
  }
};

export const getUserInstitutionsWithAccounts = async () => {
  const userData = sessionStorage.getItem("userData");
  const jsonUserInfo = JSON.parse(userData);

  try {
    const fetch = await institutionsApi.getByUserWithAcounts(jsonUserInfo);
    const response = await fetch.json()

    if (response.status.code === 200) {
      updateUserSession(response)
    }

    return response;
  } catch (error) {
    return {
      status: {
        code: 500,
        error: error,
        message: `Internal server error.`
      }
    }
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
    return {
      status: {
        code: 500,
        error: error,
        message: `Internal server error.`
      }
    }
  }
};