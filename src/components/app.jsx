import React from 'react';
import Toolbar from './toolbar';
import TasksPannel from './tasksPannel';

const App = React.createClass ({

	render() {
		return	(<div className="content">
					<header>
						<h1>Swarmest</h1>
					</header>
					<Toolbar />
					<TasksPannel />
				</div>)
	}
});

export default App;
