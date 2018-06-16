import React from 'react';

// Its only job is to render HTML-like JSX.
// export class GuineaPigs extends Component {
//   render () {
//     let src = this.props.src; // property pass to this component class
//     return (
//       <div>
//         <h1>Cute Guinea Pigs</h1>
//         <img src={src} alt="Guinea pigs pics"/>
//       </div>
//     );
//   }
// }

// written as stateless functional components
export const GuineaPigs = (props) => {
  return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={props.src} alt="Guinea pigs pics"/>
      </div>
  );
};