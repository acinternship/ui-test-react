import SocialIcons from './SocialIcons';
import DataBase from './DataBase';

class SocialGroup extends React.Component {

	constructor(props) {
		super(props)
		
		this.state = {
			numberOfNotifications: DataBase.getNumberOfNotifications(),
			numberOfChats: DataBase.getNumberOfChats()
		}
	}
	
	render() {
		return(
			<div id="SocialGroup" className="icons col s2">
				<div className="icons row">
					<SocialIcons icon="question_answer" number={this.state.numberOfNotifications} />

					<SocialIcons icon="comment" number={this.state.numberOfChats} />

					<SocialIcons icon="search" onClick={this.insertNewChat}/>
				</div>
			</div>	
		)
	}
}

export default SocialGroup;