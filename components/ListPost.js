import ListPostItem from './ListPostItem';
import PostOption from './PostOption';

class ListPost extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			posts: [
				{
					id: 1,
					type: "play_arrow",
					title: "The Clear and Present Danger of Donald Trump",
					category: "The Opinion Pages",
					description: "Obama shed his famous reserve to compare Trump to America’s great enemies, in a sign of rising — and appropriate — alarm."
				},
				{
					id: 2,
					type: "folder",
					title: "Putin ‘Is a Better Leader Than Obama’",
					category: "The Interpreter",
					description: "Mr. Trump reiterated his praise for the Russian president’s “leadership qualities” while partly walking back his remarks on hacking Mrs. Clinton’s email."
				},
				{
					id: 3,
					type: "insert_chart",
					title: "Abuses by Debt Collectors Prompt New Federal Rules",
					category: "The Interpreter",
					description: "The Consumer Financial Protection Bureau proposals aim to strengthen federal efforts to clamp down on collectors who hound people for debts they may not owe."
				},
				{
					id: 4,
					type: "play_arrow",
					title: "U.S. Secures Vast New Trove of Intelligence on ISIS",
					category: "THE U.S. Secures",
					description: "Officials say the information, seized by American-backed militias in Syria, could help fight militants on the battlefield and prevent fighters from slipping into Europe."
				},
				{
					id: 5,
					type: "insert_chart",
					title: "Who Is Polluting Rio’s Bay?",
					category: "RIO 2016",
					description: "A major part of Rio de Janeiro’s winning Olympic bid was a plan to capture and treat 80 percent of the sewage that flows into Guanabara Bay, something organizers now admit will not happen — certainly not by August, if ever."
				}
			]
		}
	}

	addPost() {
		console.log("Teste");
		var obj = {
			id: 6,
			type: "insert_chart",
			title: "Rafael",
			category: "RIO 2016",
			description: "A major part of Rio de Janeiro’s winning Olympic bid was a plan to capture and treat 80 percent of the sewage that flows into Guanabara Bay, something organizers now admit will not happen — certainly not by August, if ever."
		}
		
		this.state.posts.push(obj)
	}
	
	render() {
		let rows = this.state.posts.map(item => {
			return <ListPostItem key={item.id} posts={item}/>
		})
		
		
		return (
			<div className="row">
				<div id="PostsOptions" className="row">
					<PostOption click={this.addPost} />
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