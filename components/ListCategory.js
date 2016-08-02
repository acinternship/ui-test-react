import DataBase from './DataBase';
import ListCategoryItem from './ListCategoryItem';
import ListCategoryOption from './ListCategoryOption';

class ListCategory extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			categoryList: DataBase.getCategoryList()
		}
		
		this.deleteCategory = this.deleteCategory.bind(this)
	}
	
	addCategory() {
		var obj = {
			id: 0, //Define no addCategory para garantir integridade
			label: "Category Name",
			status: 0
		}
				 
		DataBase.addCategory(obj)
		this.setState({categoryList: DataBase.getCategoryList()})
		
		console.log(DataBase.getCategoryList())
	}
	
	deleteCategory(idToRemove) {
		DataBase.deleteCategory(idToRemove)
		
		var dbCategoryList = DataBase.getCategoryList()
				
		this.setState({categoryList: DataBase.getCategoryList()})
	}
	
	render() {
		let rows = this.state.categoryList.map(item => {
				
			if(item.status === 0) {
				return <ListCategoryItem key={item.id} category={item} onClick={this.deleteCategory}/>	
			}
		})
		return(
			<div className="row">
				<div id="CategoryOptions" className="row">
					<ListCategoryOption onClick={this.addCategory.bind(this)} />
				</div>
				<ul className="collection with-header">
					{rows}
				</ul>
			</div>
		)
	}
}

export default ListCategory;