import { updateUserSession } from "../lib/session";

import accountsApi from "../sharedApis/accountsApi";

export const getAllAccountsByInstitutionId = async (basiqInstitutionId) => {
  const userData = sessionStorage.getItem("userData");
  const jsonUserInfo = JSON.parse(userData);

  try {
    const fetch = await accountsApi.getAllByInstitutionId(jsonUserInfo, basiqInstitutionId);
    const response = await fetch.json();

    if(response === undefined) {
      return undefined
    }

    if (response.status.code === 200) {
      updateUserSession(response);
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

export const getUserAccountsByInstitutionId = async (basiqInstitutionId) => {
  const userData = sessionStorage.getItem("userData");
  const jsonUserInfo = JSON.parse(userData);

  try {
    const fetch = await accountsApi.getUserByInstitutionId(jsonUserInfo, basiqInstitutionId);
    const response = await fetch.json();

    if (response.status.code === 200) {
      updateUserSession(response);
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

export const postNewAccounts = async (basiqInstitutionId, accounts) => {
  const userData = sessionStorage.getItem("userData");
  const jsonUserInfo = JSON.parse(userData);

  try {
    const fetch = await accountsApi.postNew(jsonUserInfo, basiqInstitutionId, accounts);
    const response = await fetch.json();

    if (response.status.code === 200) {
      updateUserSession(response);
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
}