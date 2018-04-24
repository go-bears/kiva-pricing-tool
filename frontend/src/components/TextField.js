import React, { Component } from 'react'

class TextField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valid: true,
      id: this.props.text,
      error_message: '',
      type: this.props.typeVal,
      textBody: this.props.textBody ? this.props.textBody : ''
    }
  }

  handleChange(e) {
    let value = e.target.value
    if (this.props.typeVal.toLowerCase() === 'int') {
      let tryInt = parseInt(value)
      let limit = parseInt(this.props.limit)
      if (isNaN(tryInt)) {
        this.setState({ error_message: 'error in input: should be an integer' })
      } else {
        if (tryInt > limit) {
          this.setState({ error_message: 'input limit succeeded' })
        } else {
          this.setState({ error_message: '' })
        }
      }
    }

    if (this.props.typeVal.toLowerCase() === 'float') {
      let tryFloat = parseFloat(value)
      let limit = parseInt(this.props.limit)
      if (isNaN(tryFloat)) {
        this.setState({ error_message: 'error in input: should be a decimal' })
      } else {
        if (tryFloat > limit) {
          this.setState({ error_message: 'input limit succeeded' })
        } else {
          this.setState({ error_message: '' })
        }
      }
    }

    if (this.props.typeVal.toLowerCase() === 'string') {
      let tryString = /^[a-zA-Z]+$/.test(value)
      if (!tryString) {
        this.setState({
          error_message: 'error in input: should only have letters'
        })
      } else {
        this.setState({ error_message: '' })
      }
    }
    if (value === '') {
      this.setState({ error_message: '' })
    }
    this.setState({ textBody: value })
    this.props.onTextInputChange(this.props.reduxId, value)
  }

  render() {
    return (
      <div id="className">
        {this.props.id}:
        <input
          className="form-control input-sm"
          type={this.props.input_type}
          id={this.props.text}
          placeholder={this.props.hint}
          onChange={event => this.handleChange(event)}
          value={this.state.textBody}
          required
          autoFocus
        />
        <br />
        <p>{this.state.error_message}</p>
      </div>
    )
  }
}
export default TextField
