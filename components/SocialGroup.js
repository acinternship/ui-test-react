import SocialIcons from './SocialIcons';
import DataBase from './DataBase';

class SocialGroup extends React.Component {

	constructor(props) {
		super(props)
	}
	
	render() {
		return(
			<div id="SocialGroup" className="icons col s2">
				<div className="icons row">
					<SocialIcons icon="question_answer" number={DataBase.getNumberOfNotifications()} />

					<SocialIcons icon="comment" number={DataBase.getNumberOfChats()} />

					<SocialIcons icon="search" onClick={this.insertNewChat}/>
				</div>
			</div>	
		)
	}
}

export default SocialGroup;