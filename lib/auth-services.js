import { BACKEND_URL } from 'react-native-dotenv'
import axios from "axios";
import { AsyncStorage } from 'react-native';

class Auth {
  constructor() {
    console.log("Connecting to", BACKEND_URL)

    this.auth = axios.create({

      baseURL: BACKEND_URL,


      //Home
      //baseURL: "http://192.168.1.118:5000"

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
    console.log('loaded userid', this.userId)
  }


  signup(user) {
    const { username, password } = user;
    return this.auth
      .post('user/signup', { username, password })
      .then((response) => {
        const user = response.data;
        this._setUserId(user._id);
        return response.data;
      });
  }

  async login(user) {
    const { username, password } = user;

    return this.auth
      .post('/user/login', { username, password })
      .then((response) => {
        const user = response.data;
        this._setUserId(user._id);
        return response.data;
      });
  }

  logout() {
    //Currently not doing anything in backend
    //Saving tempUserId for deleteUser();
    this.tempUserId = this.userId;
    this.userId = null;
    console.log("TEMP USER ID", this.tempUserId)
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

  deleteUser() {
    console.log("USERID", this.tempUserId)
    return this.auth
      .delete(`/user/delete/${this.tempUserId}`)
      .then(({ data }) => data);
  }

  addActivity(activityName, positiveGoal, data) {

    return this.auth
      .post('user/addActivity', { activityName, positiveGoal, userId: this.userId, data })
      .then((response) => {
        return response.data;
      });
  }

  addToFeed(activityState) {

    const { activityName, feedbackType, category, image, title, text } = activityState;

    return this.auth
      .post('user/addToFeed', { activityName, userId: this.userId, feedbackType, category, image, title, text })
      .then((response) => {
        return response.data;
      });
  }

  getUserFeed() {
    return this.auth.get(`/user/getFeed/${this.userId}`).then(response => response.data);
  }


}

const auth = new Auth();

export default auth;


