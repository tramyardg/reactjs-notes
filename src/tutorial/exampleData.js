import React, {Component} from 'react';

class ExampleData extends Component {
  render () {
    const rowsObj = this.props.dataSet;
    const headingsArray = this.props.headings;
    const rows = rowsObj.map(function (row, index) {
      return (
        <tr key={index}>
          <td>{row.when}</td>
          <td>{row.who}</td>
          <td>{row.description}</td>
        </tr>
      );
    });
    const headings = headingsArray.map(function (heading, index) {
      return (
        <th key={index}>{heading}</th>
      );
    });
    return (
      <table>
        <thead>
          <tr>
            {headings}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default ExampleData;
