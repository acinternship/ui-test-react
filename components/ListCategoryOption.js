class ListCategoryOption extends React.Component {
	render() {
		return (
			<a id="btnNewCategory" className="btn-Add waves-effect waves-light btn right" onClick={this.props.onClick}>	  
				<i className="material-icons left">edit</i>New Category
			</a>
		)
	}
}

export default ListCategoryOption;