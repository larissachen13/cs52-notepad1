import React, { Component } from 'react';
import ContentArea from './content';
import Draggable from 'react-draggable'; // The default

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      noteText: '',
    };
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.onStart = this.onStart.bind(this);
  }
  onDrag(e, ui) {
    this.props.drag(this.props.id, ui.x, ui.y);
  }
  onStart() {
    document.getElementById(this.props.id).style.zIndex = this.props.zInd;
    this.props.changeZ(this.props.zInd + 1);
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
  handleDelete() {
    this.props.onDelete(this.props.id);
  }
  render() {
    let icon;
    if (this.state.editMode === true) {
      icon = 'fa fa-check 2x';
    } else {
      icon = 'fa fa-pencil 2x';
    }
    return (
      <Draggable onDrag={this.onDrag} handle=".drag"
        position={{ x: this.props.note.position.x, y: this.props.note.position.y }}
        onStart={this.onStart}
      >
        <div className="note-item" id={this.props.id}>
          <ul className="note-header">
            <li>
              <ul className="inner-list">
                <li className="title"> {this.props.note.title} </li>
                <li> <a href="#"> <i className="fa fa-trash-o 2x" onClick={this.handleDelete} /> </a></li>
                <li> <a href="#"> <i className={icon} onClick={this.handleEditChange}></i></a></li>
              </ul>
            </li>
            <li className="drag"> <a href="#"> <i className="fa fa-arrows-alt"></i> </a> </li>
          </ul>
          <ContentArea className="content" id={this.props.id} note={this.props.note}
            mode={this.state.editMode} onTextChange={this.props.onTextChange}
          />
        </div>
      </Draggable>
    );
  }
}
export default Note;
