import React, { Component } from 'react';
import marked from 'marked';

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
    this.props.onTextChange(this.props.id, event.target.value);
  }
  render() {
    if (this.props.mode === true) {
      return (
        <textarea className="note-input" onChange={this.handleTextChange} value={this.state.noteText} />
      );
    } else {
      return (
        <div className="note-text" dangerouslySetInnerHTML={{ __html: marked(this.props.note.text || '') }} />
      );
    }
  }
}
export default ContentArea;
