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
                error
              });
            }
        )
  }

  render() {
    return (<div>hello</div>);
  }
}

export default FetchExample;