import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      //Home
      baseURL: "http://192.168.1.118:5000",

      //Movil
      //baseURL: "http://172.20.10.3:5000",


      //Ironhack
      //baseURL: "http://192.168.65.215:5000",

      withCredentials: true
    });

    this.userId = "5ce3f2262c5b7d66e98f2def";
  }

  signup(user) {
    const { username, password } = user;
    return this.auth
      .post("/auth/signup", { username, password })
      .then(({ data }) => data);
  }

  login(user) {
    const { username, password } = user;
    return this.auth
      .post("/auth/login", { username, password })
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post("/auth/logout", {}).then(response => response.data);
  }

  me() {
    return this.auth.get("/auth/me").then(response => response.data);
  }

  updateUser(userId) {

  }
}

const auth = new Auth();

export default auth;
