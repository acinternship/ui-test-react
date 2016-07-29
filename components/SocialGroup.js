import SocialIcons from './SocialIcons';

class SocialGroup extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			"numberOfChats": 0,
			"numberOfNotifications": 0
		}
		this.getNotification = this.getNotification.bind(this)
	}
	
	componentWillMount() {
		var dbNotification = this.props.numberOfNotifications
		var dbChats = this.props.numberOfChats
		
		this.setState({numberOfChats: dbChats});
		this.setState({numberOfNotifications: dbNotification});
	}
	
	getNotification() {
		this.setState({numberOfChats: 3});
	}
	
	render() {
		return(
			<div id="SocialGroup" className="icons col s2">
				<div className="icons row">
					<SocialIcons icon="question_answer" number={this.state.numberOfNotifications} />

					<SocialIcons icon="comment" number={this.state.numberOfChats} />

					<SocialIcons icon="search" click={this.getNotification}/>
				</div>
			</div>	
		)
	}
}

export default SocialGroup;