import LineInput from './LineInput';
import AreaInput from './AreaInput';
import ButtonForm from './ButtonForm';
import ListPost from './ListPost';
import DataBase from './DataBase';

class NewPostForm extends React.Component {
	
	onClick() {
		var title = document.getElementById('Title').value
		var category = document.getElementById('Category').value
		var description = document.getElementById('Description').value
		
				
		var obj = {
			id: (DataBase.getLastIdPost() + 1),
			type: "insert_chart",
			title: title,
			category: category,
			description: description
		}
		   
    	DataBase.addPost(obj);
		console.log(DataBase.getPosts())
		
		window.location.href = "posts.html";
		
	}
	render() {
		return(
			<form id="formNewPost" class="col s12" action="posts.html">
				<LineInput label="Title" />
				<LineInput label="Category" />
				<AreaInput label="Description" />
				<ButtonForm label="POST" icon="add" onClick={this.onClick} />
			</form>
		)
	}
}

export default NewPostForm;