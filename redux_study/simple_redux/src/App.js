import React from 'react';
import store from './store';
import { addAction, decreseAction } from './action';

class App extends React.Component {
  
  addHandler = () => {
    store.dispatch(addAction());
  }

  decreseHandler = () => {
    store.dispatch(decreseAction());
  };

  componentDidMount(){
    store.subscribe(() => {
      this.setState({});
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.addHandler}>+</button>
        <button onClick={this.decreseHandler}>-</button>
        <div>{store.getState().value}</div>
      </div>
    ); 
  }
}

export default App;
