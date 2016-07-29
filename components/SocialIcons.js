class SocialIcons extends React.Component {
	
	onClickGetNotification(e) {	
		this.props.onClick(e)
	}
	
	render() {
		var retorno = <i className="icon tiny material-icons">{this.props.icon}</i>
		
		if(this.props.number > 0) {
			retorno = <div><i className="icon tiny material-icons">{this.props.icon}</i>{this.props.number}</div>
		} else if(this.props.icon == "search") {
			retorno = <div onClick={this.onClickGetNotification.bind(this)}><i className="icon tiny material-icons">{this.props.icon}</i></div>
		
		}
		
		return(retorno)
	}
}

export default SocialIcons;