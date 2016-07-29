import SocialGroup from './SocialGroup';
import WelcomeMsg from './WelcomeMsg';
import DataBase from './DataBase';

class Header extends React.Component {
	constructor(props) {
		super(props)
		
		var dbChat;
		var dbNotifications;
		var dbChats;
		var dbUserName;		
	}
	
	componentWillMount() {
		this.dbChat = DataBase.getNumberOfChats();
		this.dbNotification = DataBase.getNumberOfNotifications();
		this.dbChats = DataBase.getNumberOfChats();
		this.dbUserName = DataBase.getUserName();
	}
	
	render() {
		return(
			<div className="flex m-p-zero col s12"> 
				<WelcomeMsg userName={this.dbUserName} />
				
				<SocialGroup numberOfNotifications = {this.dbNotification} numberOfChats = {this.dbChats} />
			</div>
		)
	}
}

export default Header;