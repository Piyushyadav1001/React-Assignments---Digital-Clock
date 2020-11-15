import React, { Component } from "react";
import "./Ap.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.change = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1 * 1000); // every 1 seconds
  }

  componentWillUnmount() {
    clearInterval(this.change);
  }
  render() {
    const { time } = this.state;
    return (
      <div className="Clock">
        <h3 id="time">{time.toLocaleTimeString()}</h3>
      </div>
    );
  }
}
export default App;
