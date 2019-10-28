import React from 'react';
import styles from './style/modal.module.scss';
import PropTypes from 'prop-types';

class Modal extends React.PureComponent {
  render() {
    return (
      <div className={styles.modal}>
        <div className={styles.modalBox}>
          {/* <div className={styles.modalHeader}>
            <i className="iconfont iconclose" onClick={this.props.onCancel}></i>
          </div> */}
          <div className={styles.content}>
            {this.props.text}
          </div>
          <div className={styles.handle}>
            <button className={styles.confirm} onClick={this.props.onConfirm} >确认</button>
            <button className={styles.cancel} onClick={this.props.onCancel} >取消</button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  text: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func
};

export default Modal;