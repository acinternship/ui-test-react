class ListUsersItem extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.onClickEdit = this.onClickEdit.bind(this)
		this.onClickDelete = this.onClickDelete.bind(this)
	}
	
	onClickEdit() {
		this.props.onClickEdit(this.props.user.id)
	}
	
	onClickDelete() {
		this.props.onClickDelete(this.props.user.id)
	}
	render() {
		return(
			<tr>
				<td>{this.props.user.name}</td>
				<td>{this.props.user.role}</td>
				<td>
					<i id="btnEditUser" className="material-icons">mode_edit</i>
					<i className="material-icons" onClick={this.onClickDelete}>delete</i></td>
			</tr>
		)
	}
}

export default ListUsersItem