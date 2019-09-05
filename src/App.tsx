import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import Table from './components/Table';
import NavBar from './components/Navbar'
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <NavBar />
  </Provider>
)

export default App;
