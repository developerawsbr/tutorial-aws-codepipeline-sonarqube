import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Calc from './Calc';

export default class App extends Component {
  render() {
    const calc = new Calc();
    return (
      <div className="App">
        Foi executado a somatoria 1+1 = {calc.sum(1, 1)}
      </div>
    );
  }
}