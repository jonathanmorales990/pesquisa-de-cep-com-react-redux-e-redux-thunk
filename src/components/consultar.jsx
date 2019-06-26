import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, Row, Col, Card, CardTitle, CardText,Button,Input } from 'reactstrap';
import { buscaCep, onChangeCepInput } from '../actions/displaycepAction';

import '../css/consultar.css';

class Consultar extends Component {

	render() {
  	
	    return (
			<Container>
				<Row>
					<Col className='consultacep' xs={{ size: 4, offset:4}} sm={{ size: 6, offset:4}} md={{ size: 4, offset:4 }}>
						<Input type="text" name="cep" placeholder="Insira o seu CEP" onChange={this.props.onChangeCepInput}/>	
						<Button size="lg" block onClick={() => this.props.buscaCep()} >Consultar</Button>
					</Col>
				</Row>
			</Container>
		)
	    
  	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ buscaCep, onChangeCepInput }, dispatch);

export default connect(null, mapDispatchToProps)(Consultar);
