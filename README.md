# avance (Frontend)

## Habit builder

This app will help people to create good habits every day. I will give recomendations that the user should follow. The result will be displayed in a feed, depending on the user actions.

The application is built in React Native.

## User Stories

- **Signup:** As an anon I can sign up in the platform.

- **Login:** As a user I can login to the platform so that I can register activity and see my progress.

- **Logout:** As a user I can logout from the platform so no one else can use it

- **Onboarding:** As a user I will answer some introduction questions. 

- **User profile** As a user I can edit my profile.

- **Dashboard** As a user I can see the activitys I can work on.

- **Activity Reg** As a user I will be able to registrer what I eat or drink.

- **Activit movement reg**  As a user I want to be able to see how many steps I taken/day.

- **Feedback** As a user I want to get feedback on how I'm doing.

  

## Backlog

Activity:
- Register food with ean scan
- Register photo with image recognition
- Read pedometer values

  

# Client

## Routes
| Method | Path | Component | Permissions | Behavior |
|--------|------|--------|--| -------|
| `get`  | `/` | LoginComponent | public |  |
| `post` | `/auth/signup` | SignupPageComponent| anon only| signup form, link to login, navigate to on boarding after signup |
| `post` | `/auth/login` | LoginPageComponent | anon only |login form, link to signup, navigate to dashboard after login |
| `post` | `/auth/logout` | n/a| private | navigate to LoginPage after logout, expire session |
| `get` | `/onboarding` | OnboardingComponent | private | Handle on boarding, answer questions and store in db. This will be inside signup. |
| `get` | `/dashboard` | DashboardComponent | private | Show available and future activities |
| `get` | `/activityInfo` | ActivityInfoConmponent | private | Show info about how to do an activity |
| `post` | `/activityRegister` | RegisterActivityComponent | private | First case is to click an image of the product eaten or drunken and that this registeres in the db. |
| `get` | `/feedback` | FeedbackComponent | private | Shows accomplishments (or failures) in a feed |
| `post `| `/account` | AccountComponent | private | Allows changing user info |



## Components

- Log in component
  
- Profile component
  
  - Add profile component 
  - Edit profile component
  
- Omboarding component
  
- Activity recomendation component
  
- Register activity component
  
  - image component
  - Bar-code scanner component
  - Image recognition component
  
- Feed component
  
  - Feed item component
  
- Step target component
  
- Step display component
  
  


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Activity Service
  - addActivity(data)
- Feedback Service
  - getFeedback
- Account Service
  - editAccountDetails

# Server

## Models

User model

```
const userSchema = new Schema({
  username: String,
  password: String,
  displayName: String,
  email: String,
  image: {
    type: String, 
  },
  age: String,
  weight: String,
  height: String,
},
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  });

```

Activity model

```
const activitySchema = new Schema({
  activityName: String,
  data: Object,
  date: { type: Date, default: Date.now },
  userId: { type: Schema.Types.ObjectId, ref: 'User' }
});
```

Feedback model

```
const feedSchema = new Schema({
  activityName: String,
  feedbackType: String,
  category: String,
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  image: String,
  title: String,
  text: String,
  date: { type: Date, default: Date.now }
});
```

Questionar Answers model

```
const questAnswSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  questionId: number,
  answerId: number,
  date: { type: Date, default: Date.now }
});
```

## 

## API Endpoints (backend routes)

- GET /auth/me
  - 404 if no user in session
  - 200 with user object
  
- POST /auth/signup
  - 401 if user logged in
  - body:
    - username
    - email
    - password
  - validation
    - fields not empty (422)
    - user not exists (409)
  - create user with encrypted password
  - store user in session
  - 200 with user object
  
- POST /auth/login
  - 401 if user logged in
  - body:
    - username
    - password
  - validation
    - fields not empty (422)
    - user exists (404)
    - passdword matches (404)
  - store user in session
  - 200 with user object
  
- POST /auth/logout
  - body: (empty)
  - 204
  
- PUT /user/:id
  - body:
    - userInfo
  - update user info

- DELETE /user/:id
  - body:
    - userInfo
  - delete user

- POST /user/addActivity
  - body:
    - activityType
  - add new activity with date
  
- GET /user/getActivity
  - body:
    - activityType
  - get registred activities.
  
- POST /user/addQuestionairreAnswer
  - body:
    - questionId
    - answerId
  - add new questionnaire answer with date
  
- GET /user/feedback
  - get array of all user feedback
  - 200 OK with array of feedback objects
   

## Links

### Trello

[Trello board](https://trello.com/b/IyZgK8xX/avance) 

### Git

[Repository Link](https://github.com/ansolantz/avance-native)

[Deploy Link (mobile)](https://exp.host/@ansolantz/avance-native)

### Slides

[Slides Link](https://docs.google.com/presentation/d/1cM6jcVP8W3MW1Noit5v_rjv8CHtO1uaUa9JWNQtgx5s/edit?usp=sharing)

