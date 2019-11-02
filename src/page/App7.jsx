import React, { Component } from 'react';
import { confirm } from '@/components/confirm/Confirm';

class App1 extends Component {
  async componentDidMount() {
    let res = await confirm('确定删除吗');
    if (res) {
      console.log("是")
    } else {
      console.log("否")
    }
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}

App1.propTypes = {

};

export default App1;
