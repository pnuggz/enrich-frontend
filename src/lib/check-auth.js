export default function checkAuthorization() {
  const userInfo = sessionStorage.getItem("userInfo");
  const jsonUserInfo = JSON.parse(userInfo);

  if (userInfo) {
    const createdDate = new Date(jsonUserInfo.token_date);
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
