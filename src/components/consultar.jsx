import React, { Component } from 'react';
import { Container, Row, Col, Card, CardTitle, CardText,Button,Input } from 'reactstrap';
import MaskedInput from 'react-maskedinput';
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
		console.log(this.state.cep);
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

export default Consultar;
