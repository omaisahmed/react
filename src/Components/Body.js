import React from "react";

/* Styles */
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class Body extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <Grid>
                        <h1>Mr Mac</h1>
                        <p>Poodle Box</p>
                    </Grid>
                </Jumbotron>

                <Grid>
                    <Row>
                        <Col md={4}>
                            <h2>Luxurious Dog Clothes</h2>
                            <p>So luxury much now</p>
                            <p><Button>View details »</Button></p>
                        </Col>
                        <Col md={4}>
                            <h2>Delectable Dog Délectants</h2>
                            <p>Food</p>
                            <p><Button>View details »</Button></p>
                        </Col>
                        <Col md={4}>
                            <h2>Toys</h2>
                            <p>MMmhmmmm</p>
                            <p><Button>View details</Button></p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}