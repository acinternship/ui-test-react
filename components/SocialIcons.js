class SocialIcons extends React.Component {
	onClick(e) {
		console.log(e)
		
		this.props.click()
	}
	render() {
		var retorno = <i className="icon tiny material-icons">{this.props.icon}</i>
		
		if(this.props.number > 0) {
			retorno = <div><i className="icon tiny material-icons">{this.props.icon}</i>{this.props.number}</div>
		} else if(this.props.icon == "search") {
			retorno = <div onClick={this.onClick.bind(this)}><i className="icon tiny material-icons">{this.props.icon}</i></div>
		
		}
		
		return(retorno)
	}
}

export default SocialIcons;