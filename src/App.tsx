import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import NavBar from './components/Navbar'
import { Provider } from 'react-redux';
import store from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <NavBar />
  </Provider>
)

export default App;
