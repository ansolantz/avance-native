import axios from "axios";
import { AsyncStorage } from 'react-native';

class Auth {
  constructor() {
    this.auth = axios.create({
      //Home
      baseURL: "http://192.168.1.118:5000",

      //Movil
      //baseURL: "http://172.20.10.3:5000",

      //Ironhack
      //baseURL: "http://192.168.65.215:5000",

      //withCredentials: true
    });
    this._getUserId();
  }

  // Saves the userId token  to storage
  _setUserId = (userId) => {
    this.userId = userId;
    AsyncStorage.setItem('userId', userId);
  }


  // Fetch the token from storage then navigate to our appropriate place
  _getUserId = async () => {
    this.userId = await AsyncStorage.getItem('userId');
  }

  signup(user) {
    const { username, password } = user;
    return this.auth
      .post('user/signup', { username, password })
      .then((response) => {
        const user = response.data;
        this._setUserId(user._id);
        return response;
      });
  }

  async login(user) {
    const { username, password } = user;

    return this.auth
      .post('/user/login', { username, password })
      .then((response) => {
        return response.data;
      });
  }

  logout() {
    return this.auth.post('/user/logout', {}).then(response => response.data);
  }

  getUser() {
    return this.auth.get(`/user/me/${this.userId}`).then(response => response.data);
  }

  editUser(userState) {
    const { displayName, email, url, age, weight, height } = userState;

    return this.auth
      .put('/user/update/', { _id: this.userId, displayName, email, url, age, weight, height })
      .then(({ data }) => data);

  }
}

const auth = new Auth();

export default auth;
