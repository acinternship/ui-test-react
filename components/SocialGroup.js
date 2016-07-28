import SocialIcons from './SocialIcons';

class SocialGroup extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			db: {
				chat: 0,
				notification: 0
			},
			numberOfChats: 0,
			numberOfNotifications: 0
		}
	}
	
	componentWillMount() {
		var dbChat = this.state.db.chat
		var dbNotification = this.state.db.notification
		
		this.setState({numberOfChats: dbChat});
		this.setState({numberOfNotifications: dbNotification});
	}
	
	render() {
		return(
			<div className="icons row">
				<SocialIcons icon="question_answer" number={this.state.numberOfNotifications} />
				
				<SocialIcons icon="comment" number={this.state.numberOfChats} />
				
				<SocialIcons icon="search" />
			</div>
		)
	}
}

export default SocialGroup;