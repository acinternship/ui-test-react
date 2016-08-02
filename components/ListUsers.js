import ListUsersItem from './ListUsersItem';
import DataBase from './DataBase';

class ListUsers extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			allUsers: DataBase.getAllUsers()
		}
		this.onClickEdit = this.onClickEdit.bind(this)
		this.onClickDelete = this.onClickDelete.bind(this)
	}
	
	onClickEdit(id) {
		console.log(this)
		console.log(id)
	}
	
	onClickDelete(id) {
		DataBase.deleteUser(id);
		
		var dbAllUsers = DataBase.getAllUsers()
		this.setState({allUsers: dbAllUsers})
	}
	
	render() {
		let rows = this.state.allUsers.map(item => {
			if(item.status === 0) {
				return <ListUsersItem key={item.id} user={item} onClicKEdit={this.onClickEdit} onClickDelete={this.onClickDelete}/>	
			}
		})
		
		return(
			<table id="listAllUsers" className="highlight centered bordered">
				<thead>
					<tr>
						<th>Name</th>
						<th>Role</th>
						<th>Options</th>
					</tr>
				</thead>

				<tbody>
					{rows}
				</tbody>
			</table>
		)
	}
}

export default ListUsers;