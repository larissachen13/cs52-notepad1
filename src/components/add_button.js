import React, { Component } from 'react';

class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = { titleterm: '' };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.submitNote = this.submitNote.bind(this);
  }
  handleTitleChange(event) {
    this.setState({ titleterm: event.target.value });
  }
  submitNote(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.titleterm.trim());
  }
  render() {
    return (
      <div>
        <form name="newNote" onSubmit={this.submitNote}>
          <input type="text" placeholder="New Note Title" value={this.state.titleterm} onChange={this.handleTitleChange}></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}
export default AddButton;
