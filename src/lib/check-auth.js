export default function checkAuthorization() {
  return true
  const userData = sessionStorage.getItem("userData");
  const jsonUserInfo = JSON.parse(userData);

  if (userData) {
    const createdDate = new Date(jsonUserInfo.tokenCreatedDate);
    const created = Math.round(createdDate.getTime() / 1000);
    const ttl = 7200;
    const expiry = created + ttl;

    const now = new Date();
    const now_time = Math.round(now.getTime() / 1000);

    if (expiry > now_time === true) return true;

    return false;
  }

  return false;
}
