import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputNumber extends Component {
  constructor(props) {
    super(props)
    this.state = {
      innerValue: ''
    };
    this.onChange = this.onChange.bind(this);
  }
  get isControl() {
    return 'value' in this.props;
  }
  get value() {
    if (this.isControl) {
      return this.props.value;
    } else { 
      return this.state.innerValue;
    }
  }
  componentDidMount() {
    this.setState({
      innerValue: this.props.defaultValue
    })
  }
  onChange(e) {
    if (!this.isControl) {
      this.setState({
        innerValue: e.target.value
      });
    }
    this.props.onChange(e);
  }
  render() {
    return (
      <input
        type="text"
        value={this.value}
        onChange={this.onChange}
      />
    );
  }
}

InputNumber.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputNumber;
