import ListPost from './ListPost';
import DataBase from './DataBase';

class PostOption extends React.Component {

	render() {
		return (
			<a id="btnNewPost" className="btn-Add waves-effect waves-light btn right" onClick={this.props.onClick}>	  
				<i className="material-icons left">edit</i>New Post
			</a>
		)
	}
}

export default PostOption;