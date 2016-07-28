class ListItem extends React.Component {
	render() {
		return (
			<div className="item-menu">
				<a href={this.props.data.href}>
					<i className="tiny material-icons">{this.props.data.icon}</i> 
					{this.props.data.label}
				</a>
			</div>
		)
	}
}

export default ListItem;