import React, { Component } from 'react';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = { editMode: false };
    this.contentArea = <div> </div>;
    this.handleEditChange = this.handleEditChange.bind(this);
    this.toEdit = this.toEdit.bind(this);
    this.toText = this.toText.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    console.log(props.note);
  }
  handleEditChange(event) {
    if (this.state.editMode === false) {
      // change from text mode to edit mode
      this.toEdit();
      this.setState({ editMode: true });
    } else {
      // save from edit mode to text mode
      this.toText();
      this.setState({ editMode: false });
    }
  }
  toEdit() {
    this.contentArea = <input type="text" value={this.props.note.text} onChange={this.handleTextChange} />;
  }
  toText() {
    this.contentArea = <div> text Mode </div>;
  }
  handleTextChange(event) {
    this.props.onTextChange(this.props.id, event.target.value);
  }
  render() {
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
        <div className="content">
          {this.contentArea}
        </div>

      </div>
    );
  }
}
export default Note;
