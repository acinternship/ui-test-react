import DataBase from './DataBase';

class ListCategoryItem extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.deleteCategory = this.deleteCategory.bind(this)
	}
	
	deleteCategory() {
		var idToRemove = this.props.category.id

		this.props.onClick(idToRemove)
	}
	render() {
		return(
			<li className="collection-item">
				<div>{this.props.category.label}
					<a className="secondary-content" onClick={this.deleteCategory}>
						<i className="material-icons">delete</i>
					</a>
				</div>
			</li>
		)
	}
}

export default ListCategoryItem;