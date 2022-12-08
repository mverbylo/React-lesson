import { Component } from 'react';

class DataLoader extends Component {
  state = { data: [], isLoading: false, error: null };

  load = () => {
    this.setState({ isLoading: true });
    this.props
      .loadData()
      .then((data) => {
        this.setState({ data });
      })
      .catch((error) => this.setState({ error: error.message }))
      .finally(() => this.setState({ isLoading: false }));
  };

  componentDidMount() {
    this.load();
  }

  render() {
    return this.props.render(this.state);
  }
}

export default DataLoader;
