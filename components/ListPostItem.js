class ListPostItem extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: "NO TITLE",
			category: "NO CATEGORY",
			type: "NO TYPE",
			description: "NO DESCRIPTION",
			class: "material-icons circle"
		}
	}
	
	componentWillMount() {
		var dbTitle = this.props.posts.title
		var dbCategory = this.props.posts.category
		var dbType = this.props.posts.type
		var dbDescription = this.props.posts.description
		
		
		this.setState({title: dbTitle});
		this.setState({category: dbCategory});
		this.setState({type: dbType})
		this.setState({description: dbDescription})
		
		if(dbType == 'folder'){
			this.setState({class: "material-icons circle"})
		} else if(dbType == 'insert_chart') {
			this.setState({class: "material-icons circle green"})
		} else if(dbType == 'play_arrow') {
			this.setState({class: "material-icons circle red"})
		}
	}

	render() {
		return (
			<li className="collection-item avatar">
				<i id="IconPost" className={this.state.class}>{this.state.type}</i>
				<span className="title">{this.state.title}</span>
				<p>{this.state.category} <br/> {this.state.description}</p>
				<a href="#!" className="secondary-content"><i className="tiny material-icons">mode_edit</i></a>
			</li>
		)
	}
}

export default ListPostItem;