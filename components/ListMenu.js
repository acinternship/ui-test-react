import ListMenuItem from './ListMenuItem';

class ListMenu extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			website: "CMS",
			user: {
				name: "Rafael Câmara",
				role: "Intern - Job Rotation",
				picture: "images/perfil.png"
			},
			data: [
				{
					label: "Dashboard", 
					icon: "picture_in_picture",
					href: "index.html",
					isDropdown: "true"
				},
				{
					label: "Posts", 
					icon: "note_add",
					href: "posts.html",
					isDropdown: "false"
				},
				{
					label: "Category", 
					icon: "library_books",
					href: "page.html",
					isDropdown: "false"
				},
				{
					label: "Users", 
					icon: "supervisor_account",
					href: "page.html",
					isDropdown: "false"
				},
				{
					label: "Groups", 
					icon: "store",
					href: "page.html",
					isDropdown: "false"
				},
				{
					label: "Statics", 
					icon: "insert_chart",
					href: "page.html",
					isDropdown: "false"
				},
				{
					label: "Settings", 
					icon: "settings",
					href: "page.html",
					isDropdown: "false"
				}
    		]
		}	
	}
	
	render() {
		
		let rows = this.state.data.map(item => {
			return <ListMenuItem key={item.label} data={item}/>
		})
		
		return (
			<div>
				<div id="user-info" className="row">
					<h3>{this.state.website}</h3>
					<h6>{this.state.user.name}</h6>
					<h6>{this.state.user.role}</h6>
				</div>
				<div id="menu">
					{rows}
				</div>
			</div>
		)
	}
}

export default ListMenu;