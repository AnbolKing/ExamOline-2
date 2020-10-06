const isLogin = () => {
  Boolean(localStorage.getItem("token"));
}

const getToken = () => {
  return localStorage.getItem("token");
}

export const user = () => ({ isLogin , getToken });