import React, { Component } from 'react';
import { Container, Row, Col, Card, CardTitle, CardText, Alert } from 'reactstrap';
import '../css/displaycep.css'

import { connect } from 'react-redux';

class Displaycep extends Component {
	
	componentDidUpdate(prevProps, prevState) {
	    console.log(this.props.displaycep.consulta);
	}
	render() {
  	
	    return (
			<Container>
		    
				<Row>
					<Col className='displaycep' xs={{ size: 4, offset:4}} sm={{ size: 6, offset:4}} md={{ size: 4, offset:4 }}>

						<Card body className="text-center" className='displaycepCard'>
					    	<CardTitle>Consultar CEP</CardTitle>

						    	{this.props.displaycep.erro ? 
						    	<Alert color="danger">
									<strong>Erro!</strong>
								</Alert> : null
								}

							{this.props.displaycep.consulta ? 
					    	<CardText>{`Bairro ${this.props.displaycep.consulta.bairro} ${this.props.displaycep.consulta.logradouro} ${this.props.displaycep.consulta.localidade} - ${this.props.displaycep.consulta.uf}`}</CardText> : null 
					    	}

						</Card>

					</Col>
				</Row>
		    
			</Container>
		)
	    
  	}
}

const mapStateToProps = state => ({ displaycep: state.displaycep });

export default connect(mapStateToProps)(Displaycep);