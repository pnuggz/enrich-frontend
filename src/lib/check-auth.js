export default function checkAuthorization() {
  const userData = sessionStorage.getItem("userData");
  const jsonUserInfo = JSON.parse(userData);

  if (userData) {
    const createdDate = new Date(jsonUserInfo.tokenCreatedDate);
    const created = Math.round(createdDate.getTime() / 1000);
    const ttl = 3600;
    const expiry = created + ttl;

    const now = new Date();
    const now_time = Math.round(now.getTime() / 1000);

    // return true if ok and false if not
    return (expiry > now_time === true) ? true : false
  }

  return false;
}
