class WelcomeMsg extends React.Component {
	
	render() {
		return(
			<div id="WelcomeMsg" className="message col s10">
				<p>Olá {this.props.userName}, seja bem-vindo!</p>
			</div>
		)
	}
}

export default WelcomeMsg;