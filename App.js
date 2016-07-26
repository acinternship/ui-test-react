import React from 'react';
import ReactDOM from 'react-dom';

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
//
//const App = () => <div>Teste2</div>
//
//var App = React.createClass({
//  render: function() {
//    return <div>Diferente</div>
//  }
//});

//class App extends React.Component {
//  
//  constructor(){
//    super();
//    this.state = {
//      red: 128,
//      green: 128,
//      blue: 128
//    }
//    this.update = this.update.bind(this)
//  }
//  
//  update(e){
//    this.setState(
//			{	
//      	red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
//      	green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
//      	blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
//    	}
//		)
//  }
//  
//  render(){
//    return (
//		
//      <div>
//        <Slider ref="red" update={this.update} />
//        {this.state.red}
//        <br />
//        <Slider ref="green" update={this.update} />
//        {this.state.green}
//        <br />
//        <Slider ref="blue" update={this.update} />
//        {this.state.blue}
//		
//        <br />
//      </div>
//    );
//  }
//}
//
//class Slider extends React.Component {
//  
//  render(){
//    return (
//        <div>
//          <input ref="inp" type="range" min="0" max="255" onChange={this.props.update} />
//        </div>
//    );
//  }
//}

class App extends React.Component {
	render() {
//		return <Componente children="Rafael" /> The same
		return <Componente>Rafael <Heart /> React </Componente>
	}
}

class Componente extends React.Component {
	render() {
		 return <button>{this.props.children}</button>
	}
}

class Heart extends React.Component {
	render() {
		return <span className="glyphicon glyphicon-heart" />
	}
}
export default App