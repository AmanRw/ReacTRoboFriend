import React, { Component } from "react";
import './hello.css'

// class Hello extends Component {
//   render() {
//     return (
//       <div className="f1 tc">
//         <h2>Hello World</h2>
//         <p>{this.props.greeting}</p>
//       </div>
//     );
//   }
// }

const Hello = (props) =>{
    return (
              <div className="f1 tc">
                <h2>Hello World</h2>
                <p>{props.greeting}</p>
              </div>
            );
}

export default Hello;
