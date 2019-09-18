import { checkAuthorizationRequest } from "../sharedModels/checkAuthorizationMdl";

const checkAuthorization = async () => {
  const userData = sessionStorage.getItem("userData");
  const jsonUserData = JSON.parse(userData);

  if (userData) {
    const authorizationResult = await checkAuthorizationRequest(jsonUserData);

    console.log(authorizationResult);

    return true;
  }

  return false;
};

export default checkAuthorization;
