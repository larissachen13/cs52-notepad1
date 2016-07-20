import React, { Component } from 'react';

class ContentArea extends Component {
  constructor(props) {
    super(props);

    this.state = { noteText: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  onInputChange(event) {
    this.setState({ noteText: event.target.value });
    this.props.onTextChange(this.props.id, this.state.noteText);
  }
  handleTextChange(event) {
    this.setState({ noteText: event.target.value });
    // console.log(this.state.noteText);
    this.props.onTextChange(this.props.id, this.state.noteText);
  }
  render() {
    if (this.props.mode === true) {
      return (
        <input className="note-input" onChange={this.handleTextChange} value={this.state.noteText} />
      );
    } else {
      return (
        <div> {this.state.noteText}</div>
      );
    }
  }
}
export default ContentArea;
