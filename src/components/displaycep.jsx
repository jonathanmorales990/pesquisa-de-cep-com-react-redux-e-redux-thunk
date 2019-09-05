import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, CardTitle, CardText, Alert } from 'reactstrap';
import '../css/displaycep.css'

class Displaycep extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col className='displaycep' xs={{ size: 4, offset:4}} sm={{ size: 6, offset:4}} md={{ size: 4, offset:4 }}>
						<Card body className="text-center" className='displaycepCard'>
							<CardTitle>Consultar CEP</CardTitle>
							{
								this.props.cepReducer.erro ? 
									<Alert color="danger">
										<strong>Erro! </strong> {this.props.cepReducer.erroMessage}
									</Alert> : null
							}
							{
								this.props.cepReducer.consulta ? 
									<CardText>{`Bairro ${this.props.cepReducer.consulta.bairro} ${this.props.cepReducer.consulta.logradouro} ${this.props.cepReducer.consulta.localidade} - ${this.props.cepReducer.consulta.uf}`}</CardText> : null 
							}
							{	
								this.props.cepReducer.loading ? 
									<CardText>Procurando seu CEP aguarde...</CardText> : null 
							}
						</Card>
					</Col>
				</Row>
			</Container>
		)
	}
}
const mapStateToProps = state => ({ cepReducer: state.cepReducer });
export default connect(mapStateToProps)(Displaycep);
