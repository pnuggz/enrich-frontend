import accountsApi from "../sharedApis/accountsApi";

export const accountsDataRequest = jsonUserInfo => {
  try {
    const fetch = accountsApi.get(jsonUserInfo);

    return fetch;
  } catch (error) {
    return error;
  }
};
