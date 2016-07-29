import ListPostItem from './ListPostItem';
import PostOption from './PostOption';
import DataBase from './DataBase';

class ListPost extends React.Component {
	constructor(props) {
		super(props)
	}

	addPost() {
		var obj = {
			id: (DataBase.getLastIdPost() + 1),
			type: "insert_chart",
			title: "Rafael",
			category: "RIO 2016",
			description: "A major part of Rio de Janeiro’s winning Olympic bid was a plan to capture and treat 80 percent of the sewage that flows into Guanabara Bay, something organizers now admit will not happen — certainly not by August, if ever."
		}
		   
    	DataBase.addPost(obj);	
		this.forceUpdate();
		
		var x = document.getElementById('PostList')
		x.className = "row hidden"
		x.className = "row"
		console.log(DataBase.getPosts())
	}
	
	render() {
		let rows = DataBase.getPosts().map(item => {
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