/*
 * @Description: 
 * @Author: zhongyuanrui
 * @Date: 2019-10-21 17:44:37
 * @LastEditors: zhongyuanrui
 * @LastEditTime: 2019-10-27 13:29:55
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/index.scss';
import App from './page/App1.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
