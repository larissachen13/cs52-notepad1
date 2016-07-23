// es6 import style
import './style.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddButton from './components/add_button';
import NoteList from './components/note_list';
const Immutable = require('immutable');
require('font-awesome/css/font-awesome.css');

class App extends Component {
  constructor(props) {
    super(props);
/** ***********    state*/
    this.state = {
      notes: Immutable.Map(),
      highestZindex: 0,
    };
    this.id = 0;
  }
/** ************  functions*/
  onDelete(id) {
    this.setState({
      notes: this.state.notes.delete(id),
    });
  }
  onDrag(id, x, y) {
    this.setState({
      notes: this.state.notes.update(id, (n) => {
        return Object.assign({}, n, {
          position: {
            x,
            y,
          },
        });
      }),
    });
    console.log(this.state.notes);
  }
  submit(title) {
    const id = this.id;
    this.setState({
      notes: this.state.notes.set(id, {
        title,
        text: '',
        position: {
          x: 400,
          y: 12,
        },
      }),
      highestZindex: this.state.highestZindex++,
    });
    this.id++;
  }
  changeZindex(ind) {
    this.setState({
      highestZindex: ind,
    });
  }
  updateText(id, text) {
    this.setState({
      notes: this.state.notes.update(id, (n) => { return Object.assign({}, n, { text }); }),
    });
  }
  render() {
    return (// onDelete={id => this.onDelete(id)}
      <div>
        <AddButton id="addbutton" onSubmit={title => this.submit(title)} />
        <div className="note-section">
          <NoteList notes={this.state.notes} onTextChange={(id, text) => this.updateText(id, text)} onDelete={id => this.onDelete(id)}
            drag={(id, x, y) => this.onDrag(id, x, y)} zIndex={this.state.highestZindex} changeZ={ind => this.changeZindex(ind)}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
