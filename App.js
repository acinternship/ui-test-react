import React from 'react';

//class App extends React.Component {
//  render() {
//    return (
//      <div>
//        Hello {this.props.name}
//        <br />
//        <strong>Age:</strong> {this.props.age}
//      </div>
//    )
//  }
//}
//
//App.propTypes = {
//    name: React.PropTypes.string,
//    age: React.PropTypes.number
//  }
//
//App.defaultProps = {
//  name: "NOME USUARIO",
//  age: 0
//}
//
//class Main extends React.Component {
//  render() {
//    return (
//      <App name={"Rafael"} age={20}/>
//    )
//  }
//}

//const App = () => <div>Teste2</div>

//var App = React.createClass({
//  render: function() {
//    return <div>Diferente</div>
//  }
//});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: "Text Example",
      cat: 0
    }
  }
  
  update(e) {
    this.setState({txt: e.target.value})
  }
  
  render() {
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)} />
        <h1>{this.state.txt}</h1>
      </div>
    )
  }
}

export default App