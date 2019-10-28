import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/Icon';
import styles from './button.module.scss';

class Button extends Component {
  render() {
    const {
      icon,
      type,
      children,
    } = this.props;
    return (
      <button className={`${styles['ui__button--'+type]}`}>
        <Icon name={icon}></Icon>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string
};

Button.defaultProps = {
  icon: '',
  type: 'normal'
};

export default Button;
