import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import resourceReducer from './reducers/resources'
import App from './containers/App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
injectTapEventPlugin();

// TODO: optional second param for initial state (from server)
let store = createStore(resourceReducer);

const Root = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
);

render(<Root />, document.getElementById('content'));
