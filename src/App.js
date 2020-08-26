import React, {Component} from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

//Contain the data
const store = ConfigureStore();


class App extends Component {
 
  
  render() {
    {/**Store will be available in all in all app*/}
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>

    );
  }
}

export default App;
