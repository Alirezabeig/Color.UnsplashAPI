# List Users and Users' photos - Unsplash API.
This app uses Unsplash REST API to pull its users based on search keywords and then presents their photos.

## Structure:
```
  App.js
  components
      Search.js (The search Input)
      UserList.js (Pulls the list of users based on the keywords)
      Detail.js (Shows all the photos of a selected user )
      FullScreen.js ( Presents a specific photo in full-screen )
  styles
      Includes the the files for styling the components
  reducers
      Includes the index file for reducers
  actions
      Includes the index file for actions
  assets
      Includes the images used in the app
```

## Framework:
  Expo - React Native - Redux library

## Product UI 
<img width="755" alt="productUI" src="https://user-images.githubusercontent.com/43462308/86526093-a3049580-be4c-11ea-938f-e79e00731689.png">


## Features:
  1. StackNavigation is used to enable navigation between the screens
  2. Unsplash user-list API is used to list users based on search keywords
  3. Unsplash API is used to pull users photos based on users' name search
  4. StyleSheet Component is used to design the app
  5. Empty input in search will result in a message to ask the user to enter another keyword
  6. Not found input in search will result in a message to ask the user to enter another keyword
  7. Lack of photos in any any user's profile will result in an Alert.
  8. Components are reusable


## Start:
  In order to start the project:
    1. clone the project
    2. Insert your accessKey and secretKey in UserList.js
    3. Open terminal and go to the project directory
    4. Type: $ npm install  $ expo start


## App UX:
  Search users name
  Will see a list of users with the number of their photos
  Tap on the user you like
  Will see a list of 3 photos of that specific user
  Can choose to view the photo in full-screens
  * Unsplash API only gives access to 3 photos of any given user
  * The Full Screen photo can be closed by tapping on the screen.


## Missing Something? Something is not working?
  Open a GitHub issue
  Send a pull request
  Make sure npm run lint passed


## Future Improvement
  1. Add unit tests
  2. Add swiping left or right to go through users' images
  3. Refactoring
  4. Followers button activation
