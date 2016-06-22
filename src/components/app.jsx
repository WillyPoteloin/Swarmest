import React from 'react';
import Menu from './menu';
import Toolbar from './toolbar';
import TasksPannel from './tasksPannel';

const App = React.createClass ({

	render() {
		return	(
			<div>
				<header>
					<h1>Swarmest</h1>
				</header>
				<div className="content">
					<Menu />
					<div className="content-main">
						<Toolbar />
						<TasksPannel />
					</div>
				</div>
			</div>
		)
	}
});

export default App;
