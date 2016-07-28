class SocialIcons extends React.Component {
	render() {
		var retorno = <i className="icon tiny material-icons">{this.props.icon}</i>
		
		if(this.props.number > 0) {
			retorno = <div><i className="icon tiny material-icons">{this.props.icon}</i>{this.props.number}</div>
		}
		
		return(retorno)
	}
}

export default SocialIcons;