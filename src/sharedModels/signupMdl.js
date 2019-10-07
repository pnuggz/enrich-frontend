import signupApi from "../sharedApis/signupApi";

export const signupRequest = async signupData => {
  try {
    const fetch = await signupApi.submit(signupData);

    return fetch;
  } catch (error) {
    return error;
  }
};
