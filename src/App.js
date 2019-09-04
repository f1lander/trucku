import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import Table from './components/table';
import NavBar from './components/navbar'
import { Provider } from 'react-redux';
import store from './store';

const App = (props) => (
  <Provider store={store}>
    <NavBar />
    <div className="container">
      <Table />
    </div>
  </Provider>
)

export default App;
