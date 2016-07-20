import React, { Component } from 'react';
import ContentArea from './content';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      noteText: '',
    };
    this.contentArea = <div> </div>;
    this.handleEditChange = this.handleEditChange.bind(this);
    console.log(props.note);
  }
  handleEditChange(event) {
    if (this.state.editMode === false) {
      // change from text mode to edit mode
      this.setState({ editMode: true });
    } else {
      // save from edit mode to text mode
      this.setState({ editMode: false });
    }
  }
  render() {
    console.log('rendering');
    return (
      <div className="note-item">
        <ul className="note-header">
          <li>
            <ul className="inner-list">
              <li> {this.props.note.title} </li>
              <li> <input type="checkbox" id="edit" onChange={this.handleEditChange} /></li>
              <li> <input type="checkbox" id="delete" /> </li>
            </ul>
          </li>
          <li> <input type="checkbox" id="drag" /> </li>
        </ul>
        <ContentArea id={this.props.id} note={this.props.note} mode={this.state.editMode} onTextChange={this.props.onTextChange} />
      </div>
    );
  }
}
export default Note;
