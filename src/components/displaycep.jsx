import React, { Component } from 'react';
import { Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';
import '../css/displaycep.css'
class Displaycep extends Component {
	
	render() {
  	
	    return (
			<Container>
		    
				<Row>
					<Col className='displaycep' xs={{ size: 4, offset:4}} sm={{ size: 6, offset:4}} md={{ size: 4, offset:4 }}>

						<Card body className="text-center" className='displaycepCard'>
					    	<CardTitle>Consultar CEP</CardTitle>
					    	<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
						</Card>

					</Col>
				</Row>
		    
			</Container>
		)
	    
  	}
}

export default Displaycep;
