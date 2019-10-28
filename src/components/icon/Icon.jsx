import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@/assets/iconfont/iconfont.css';

class Icon extends Component {
  render() {
    const {
      name,
      ...rest
    } = this.props;
    return (
      <span {...rest} className={`icon iconfont icon-${name}`}></span>
    );
  }
}


Icon.propTypes = {
  name: PropTypes.string
};
Icon.defaultProps = {
  name: 'bianji'
};


export default Icon;
