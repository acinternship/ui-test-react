import SocialGroup from './SocialGroup';
import WelcomeMsg from './WelcomeMsg';

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			db: {
				userName: "Rafael Câmara",
				numberOfChats: 1,
				numberOfNotifications: 2
			},
			userName: "<NO USER>",
			numberOfChats: 0,
			numberOfNotifications: 0
		}	
	}
	
	componentWillMount() {
		var dbChat = this.state.db.numberOfChats
		var dbNotification = this.state.db.numberOfNotifications
		var dbUserName = this.state.db.userName
		
		this.setState({numberOfChats: dbChat});
		this.setState({numberOfNotifications: dbNotification});
		this.setState({userName: dbUserName})
	}
	
	render() {
		return(
			<div className="flex m-p-zero col s12"> 
				<WelcomeMsg userName={this.state.userName} />
				
				<SocialGroup numberOfNotifications = {this.state.numberOfNotifications} numberOfChats = {this.state.numberOfChats} />
			</div>
		)
	}
}

export default Header;