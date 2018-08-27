const authKey = btoa("auth")

export class AuthService {

  static setAuth() {
    let auth = {
      isAuthenticated: true,
      user: "TBU_FERREIRA",
      token: "XPTO_TOKEN"
    }

    localStorage.setItem(authKey, btoa(JSON.stringify(auth)))
  }

  static getAuth() {
    const auth = localStorage.getItem(authKey)

    if (auth)
      return JSON.parse(atob(auth))
    else
      return {
        isAuthenticated: false,
        user: null,
        token: null
      }
  }

  static login(username, password) {
    // Api call to get token
    return true
  }

  static logout() {
    localStorage.removeItem(authKey)
  }
}

export default AuthService