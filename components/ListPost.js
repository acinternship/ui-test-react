import ListPostItem from './ListPostItem';
import PostOption from './PostOption';
import DataBase from './DataBase';

class ListPost extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			posts: DataBase.getPosts()
		}
	}

	addPost() {
		var obj = {
			id: 0, //Define no addPost para garantir integridade
			type: "insert_chart",
			title: "Rafael",
			category: "RIO 2016",
			description: "A major part of Rio de Janeiro’s winning Olympic bid was a plan to capture and treat 80 percent of the sewage that flows into Guanabara Bay, something organizers now admit will not happen — certainly not by August, if ever."
		}
		 
		DataBase.addPost(obj)
		this.setState({posts: DataBase.getPosts()})
		
		console.log(DataBase.getPosts())
	}
	
	ComponentDidMount() {
		var postsDb = DataBase.getPosts()
		this.setState({posts: postsDb})
	}
	
	render() {
		let rows = this.state.posts.map(item => {
			return <ListPostItem key={item.id} posts={item}/>
		})
				
		return (
			<div className="row">
				<div id="PostsOptions" className="row">
					<PostOption onClick={this.addPost.bind(this)} />
				</div>
				<div className="row">
					<ul className="collection">
						{rows}
					</ul>
				</div>
			</div>
		)
	}
}

export default ListPost;