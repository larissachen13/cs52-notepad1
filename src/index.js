// es6 import style
import './style.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddButton from './components/add_button';
import NoteList from './components/note_list';
const Immutable = require('immutable');
require('font-awesome/css/font-awesome.css');
import { fetchNotes, fetchZind, updateZ, deleteNote, updateNote, submitNote } from './firebase';

class App extends Component {
  constructor(props) {
    super(props);
/** ***********    state*/
    this.state = {
      notes: Immutable.Map(),
      highestZindex: 0,
    };
  }
  componentDidMount(firebase) {
    fetchNotes((snapshot) => {
      this.setState({
        notes: Immutable.Map(snapshot.val()),
      });
    });
    fetchZind((snapshot) => {
      this.setState({
        highestZindex: snapshot.val().zind,
      });
    });
  }
/** ************  functions*/
  onDelete(id) {
    deleteNote(id);
  }
  onDrag(id, x, y) {
    updateNote(id, {
      position: { x, y },
    });
  }
  // firebase.database().ref('notes').child(id).remove();
  submit(title) {
    submitNote({
      title,
      text: '',
      position: { x: 400, y: 12 },
    });
    updateZ(this.state.highestZindex++);
  }
  changeZindex(ind) {
    updateZ(ind);
  }
  updateText(id, text) {
    updateNote(id, { text });
  }
  render() {
    return (
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
