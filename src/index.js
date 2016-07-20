// es6 import style
import './style.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddButton from './components/add_button';
import NoteList from './components/note_list';
const Immutable = require('immutable');

class App extends Component {
  constructor(props) {
    super(props);
/** ***********    state*/
    this.state = {
      notes: Immutable.Map(),
    };
    this.id = 0;
  }
/** ************  functions*/
  submit(title) {
    const id = this.id;
    this.setState({
      notes: this.state.notes.set(id, {
        title,
        text: '',
        x: 400,
        y: 12,
        zIndex: 26,
      }),
    });
    this.id++;
  }
  updateText(id, text) {
    console.log(text);
    this.setState({
      notes: this.state.notes.update(id, (n) => { return Object.assign({}, n, { text }); }),
    });
  }
  render() {
    return (
      <div>
        <AddButton id="addbutton" onSubmit={title => this.submit(title)} />
        <div className="note-section">
          <NoteList notes={this.state.notes} onTextChange={(id, text) => this.updateText(id, text)} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
