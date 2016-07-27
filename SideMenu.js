class SideMenu extends React.Component {
	constructor(props) {
		super(props);
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
					href: "page.html"
				},
				{
					label: "Posts", 
					icon: "note_add",
					href: "page.html"
				},
				{
					label: "Category", 
					icon: "library_books",
					href: "page.html"
				},
				{
					label: "Users", 
					icon: "supervisor_account",
					href: "page.html"
				},
				{
					label: "Groups", 
					icon: "store",
					href: "page.html"
				},
				{
					label: "Statics", 
					icon: "insert_chart",
					href: "page.html"
				},
				{
					label: "Settings", 
					icon: "settings",
					href: "page.html"
				}
    		]
		}	
	}
	render() {
		let rows = this.state.data.map(item => {
			return <ItemSideMenu key={item.label} data={item}/>
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

class ItemSideMenu extends React.Component {

	render() {
		return (
			<div className="item-menu">
				<a href={this.props.data.href}>
					<i className="tiny material-icons">{this.props.data.icon}</i> {this.props.data.label}
				</a>
			</div>
		)
	}
}

export default SideMenu;