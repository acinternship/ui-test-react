class LineInput extends React.Component {
	render() {

		return(
			<div className="newPostBg row">
				<div className="input-field col s12">
					<input id={this.props.label} type="text" className="validate" placeholder={this.props.label}></input>
				</div>	
			</div>	
		)
	}
}

export default LineInput;