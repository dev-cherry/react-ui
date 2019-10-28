import React from 'react';

let loading = (Com) => {
  class LoadingComponent extends Com{
    constructor(props) {
      super(props);
      this.state = {
        loading: false
      }
    }
    showLoading() {
      this.setState({
        loading: true
      })
    }
    hideLoading() {
      this.setState({
        loading: false
      })
    }
    render() {
      return (
        <div>
          {super.render()}
          {this.state.loading && <div>loading</div>}
        </div>
      )
    }
  }
  return LoadingComponent;
}


@loading
class App extends React.Component{
  componentDidMount() {
    this.showLoading();
  }
  render() {
    return (
      <div>app</div>
    )
  }
}

export default App;
