import React, { Component } from 'react';
import {
  Icon,
  Button,
} from '@/components';

class App1 extends Component {
  render() {
    return (
      <div>
        <Icon name="caidan" style={{color: 'red'}}></Icon>
        <Button type="primary" icon="caidan">提交</Button>
      </div>
    );
  }
}

export default App1;
