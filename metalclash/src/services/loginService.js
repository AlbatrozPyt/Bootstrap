export function LoginVerify(username, password) {
  const keys = Object.keys(localStorage);

  if (localStorage.getItem(username) !== null) {
    const passwordVerify = localStorage.getItem(username);

    console.log(passwordVerify, password)
    
    if (password === passwordVerify) {
        return true;
    }
  }

  return false;
}
