import { Component } from 'react';

class Aloha extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 21345,
      isGreeting: true,
    };
  }

  handleClick = () => {
    // this.state.isGreeting = !isGreeting;
    // console.log(this.state.isGreeting);
    // v1
    this.setState({
      isGreeting: !this.state.isGreeting,
      test: Math.random() * 100,
    });
  };

  handleClick2 = () => {
    const { makeFavorite, id } = this.props;
    makeFavorite(id);
  };

  render() {
    const { name, sortUsers, makeFavorite, id } = this.props;
    const { isGreeting } = this.state;

    return (
      <div>
        <p>
          {isGreeting ? 'Hello' : 'Bye'}, {name}!
        </p>
        <button id="btn" onClick={sortUsers}>
          Change mode
        </button>
        <button onClick={() => makeFavorite(id)}>Toggle favorite</button>
        {/* <button onClick={this.handleClick2}>Toggle favorite</button> */}
      </div>
    );
  }
}

export default Aloha;