import React, { Fragment } from 'react';
import Background from './components/background';
import Layout from './components/layout';
import './css/app.css';
import Loader from './components/loader';


class App extends React.Component {
  state = {
    show: false
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        show: true
      })
    }, 3000)

  }
  renderApp = () => {
    const { show } = this.state;
    if (show) {
      return (
        <Fragment>
          <Background />
          <Layout />
        </Fragment>
      )
    }
    else
      return <Loader />
  }
  render() {

    return (
      <div className="App">
        {this.renderApp()}
      </div>
    );
  }
}

export default App;
