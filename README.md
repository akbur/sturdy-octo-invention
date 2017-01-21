### In Development

A dashboard to keep up with projects and studies.


Notes for Myself

# Study Dash

### Dev notes

**npm run start - for nodemon working on server**
  - until I separate webpack prod/dev must remove 'react-hmre' from .babelrc first
  - go to localhost:8080

**npm run dev - for developing client with hmr**
  - go to localhost:8080/public/
need to setup middleware

**npm run commit for commits**

To start mysql:

/usr/local/Cellar/mysql/5.7.14/support-files/mysql.server start

To Log into mysql:

* mysql -p
* (enter password)
* show databases;
* use learn_app(?);
* select * from resources; to see data in table

#### Resource Model
- id
- name (string)
  - name of book or course
  - input box
- type (string)
  - book / course / other
  - dropdown select menu & input on other
- url (string)
  - input box
- details (string)
   - input text area
   - any notes or details i'd like to add
- progress (string)
  - todo / in progress / complete
  - radio buttons?
- priority (integer)
  - 1-10
  - some sort of slider

**later - array of notes, goal list, tags, user **

commits - commitizen

## Ideas / TODOs

- Could hold 'static' property of grid system in app state
     - button to unlock/lock dashboard module
- Factor out grid system container child of App
- Start breaking up reducers
- Add prop types to components without them

Change Events To Handle
  - TextFields
  - SelectField
Steps:
  - Add an onChange event to the component itself
  - Add a handle function prop to the parent component
  - Add and bind and pass a handle func into the parent component from the container
  - Import an action to dispatch from that handle func
  - Create an action function and import the string in actions
  - Export the string from constants
  - Import the constant and create a reducer
