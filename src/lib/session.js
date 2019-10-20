export const updateUserSession = response => {
  const userData = sessionStorage.getItem("userData");
  const jsonUserInfo = JSON.parse(userData) || {};

  jsonUserInfo.token = response.token;
  jsonUserInfo.tokenCreatedDate = response.tokenCreatedDate;
  jsonUserInfo.user = response.user;

  sessionStorage.setItem("userData", JSON.stringify(jsonUserInfo))
  return;
}

export const destroyUserSession = () => {
  sessionStorage.setItem("userData", JSON.stringify(null))
}