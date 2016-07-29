import ListMenuItem from './ListMenuItem';
import DataBase from './DataBase';

class ListMenu extends React.Component {
	
	render() {
		
		let rows = DataBase.getItensMenu().map(item => {
			return <ListMenuItem key={item.label} data={item}/>
		})
		
		return (
			<div>
				<div id="user-info" className="row">
					<h3>{DataBase.getNameWebsite()}</h3>
					<h6>{DataBase.getUser().name}</h6>
					<h6>{DataBase.getUser().role}</h6>
				</div>
				<div id="menu">
					{rows}
				</div>
			</div>
		)
	}
}

export default ListMenu;