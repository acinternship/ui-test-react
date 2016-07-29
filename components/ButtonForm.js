class ButtonForm extends React.Component {
	render() {
		return(
			<a className="main-color-button waves-effect waves-light btn-large" type="submit" onClick={this.props.onClick}>
				<i className="material-icons right">{this.props.icon}</i>
				{this.props.label}
			</a>
		)
	}
}

export default ButtonForm;