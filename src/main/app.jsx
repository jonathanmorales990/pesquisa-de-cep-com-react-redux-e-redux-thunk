import React, { Component } from 'react';
import { combineReducers, createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Displaycep from '../components/displaycep';
import Consultar from '../components/consultar';
import cepReducer from '../reducers/cep';

import '../css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const reducers = combineReducers({ cepReducer });
const store = createStore( reducers, applyMiddleware(thunk) );

class App extends Component {
	render() {
		return (
			<Provider store={store}> 
				<div>
					<Displaycep/>
					<Consultar/>
				</div>	
			</Provider>
		)
	}
}
export default App;
