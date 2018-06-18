import React, { Component } from 'react';
import '../css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Displaycep from '../components/displaycep';
import Consultar from '../components/consultar';

class App extends Component {
	
	render() {
  	
	    return (
	    	<div>
	    		<Displaycep/>
	    		<Consultar/>
	    	</div>
		)
	    
  	}
}

export default App;
