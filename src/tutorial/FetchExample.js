import React, {Component} from 'react';

// {
//   "items": [
//     { "id": 1, "name": "Apples", "price": "$2" },
//     { "id": 2, "name": "Peaches", "price": "$5" }
//   ]
// }
class FetchExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    const apiURI = 'https://api.myjson.com/bins/17wm14';
    fetch(apiURI)
        .then(res => res.json())
        .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.items
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error: {message: 'There was an error!'}
              });
            }
        )
  }

  render() {
    if (this.state.error) {
      return (<div>Error: {this.state.error.message}</div>);
    } else if(!this.state.isLoaded) {
      return (<div>Loading...</div>);
    } else {
      return this.state.items.map(function (row, index) {
        return (
            <ul key={index}>
              <li>{row.name} : {row.price}</li>
            </ul>
        )
      });
    }
  }
}

export default FetchExample;