import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/ValidationComponent';
import Char from './Char/CharComponent';

class App extends Component {

  state = {
    text: ''
  }

  outputHandler = (event) => {
    this.setState({ text: event.target.value });
  }

  onClickHandler = (index) => {
    let tempText = [...this.state.text];
    tempText.splice(index, 1);
    this.setState({text: tempText.join('')});
  }

  render() {
    let charList: null;

    if (this.state.text.length > 0) {
      charList = (
        <div>
          {
            this.state.text.split('').map((c, i) => {
              return <Char key={i} charText={c} onClickHandler={() => this.onClickHandler(i)} />
            })
          }
        </div>
      )
    }

    return (
      <div className="App">
        <input onChange={(event) => this.outputHandler(event)} />
        <p>{this.state.text}</p>
        <Validation contentLength={this.state.text.length} />
        {charList}
      </div>
    );
  }
}

export default App;
