import React, { Component } from 'react';
import { Container, Row, Col, Card, CardTitle, CardText,Button,Input } from 'reactstrap';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { buscaCep } from '../actions/displaycepAction';

import '../css/consultar.css';

class Consultar extends Component {

	constructor(){

		super();
				
		this.onChange = this.onChange.bind(this);
		this.pesqCep = this.pesqCep.bind(this);
		this.state = {
			cep:''
		}
	}

	onChange(e) {
		this.setState({cep: e.target.value});
	}	

	pesqCep(){
		this.props.buscaCep(this.state.cep);
	}

	render() {
  	
	    return (
			<Container>
		    
				<Row>
					<Col className='consultacep' xs={{ size: 4, offset:4}} sm={{ size: 6, offset:4}} md={{ size: 4, offset:4 }}>

						
						<Input type="text" name="cep" placeholder="Insira o seu CEP" onChange={this.onChange}/>	
					    	<Button size="lg" block onClick={this.pesqCep} >Consultar</Button>
					    	

					</Col>
				</Row>
		    
			</Container>
		)
	    
  	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ buscaCep }, dispatch);

export default connect(null, mapDispatchToProps)(Consultar);