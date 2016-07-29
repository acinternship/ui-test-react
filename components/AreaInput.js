class AreaInput extends React.Component {
	render() {
		return(
			<div className="newPostBg row">
				<div className="input-field col s12">
					 <textarea id={this.props.label} className="materialize-textarea" placeholder={this.props.label}></textarea>
				</div>
			</div>
		)
	}
}

export default AreaInput;