import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

function confirm(text) {
  return new Promise((resolve, reject) => {
    if (!window.globalModal) {
      ReactDOM.render(<Modal text={text} onConfirm={() => {
        resolve(true)
      }} onCancel={() => {
        resolve(false)
      }} />, document.getElementById('modal'));
      window.globalModal = true;
    }
  })
}

function unMountConfirm() {
  if (window.globalModal) {
    ReactDOM.unmountComponentAtNode(document.getElementById('modal'));
    window.globalModal = false;
  }
}

export { confirm, unMountConfirm };
