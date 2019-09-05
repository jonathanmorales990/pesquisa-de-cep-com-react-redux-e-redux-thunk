import axios from 'axios';

export function displayError() {
	return { type: 'DISPLAY_ERROR' }
}
export function onChangeCepInput(e) {
	return { type: 'ON_CHANGE_CEP_INPUT', payload: e.target.value };
}
export function buscaCep(){
	return function (dispatch, getState) {
		let { cep } = getState().cepReducer;
		let url = `http://viacep.com.br/ws/${cep}/json/`;
		dispatch({
			type:'LOADING'
		});
		axios.get(url)
			.then((response) => {
				dispatch({
					type:'DISPLAY_CEP', 
					payload: response.data
				});
			}).catch((error) => { 
				dispatch({
					type: 'DISPLAY_ERROR',
					payload: error.response
				});
			})
	}
}
