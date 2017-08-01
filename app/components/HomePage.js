import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Row, Col } from 'react-grid-system';
import MenuItem from 'material-ui/MenuItem';

import Score from './children/Score';
import Pieces from './children//Pieces';
import Board from './children/Board';
import Options from './children/Options';
import Footer from './children/Footer';

class HomePage extends Component {

    render() {
        return (
            <div id="home-page">
                <header>
                    <h1><img src="/images/planet.jpg" alt="blue planet" width="100"/> Planet Venn</h1>  
                </header>
                <div  id="button-div">
                    <Row>
                        <Col sm={3}/>
                        <Col sm={6}>
                            <Score />
                        </Col>
                        
                    
                        <Col sm={3}/>
                    </Row>
                    <Row>
                        <Col sm={3} />
                        <Col sm={6}>
                            <Options />
                        </Col>
                        <Col sm={3} />

                    </Row>
                </div>

                <Row>
                    <Col sm={12}>
                    <Pieces />
                    </Col>
                </Row>

                <Row>
                    <Board />
                </Row>


    
                <Footer />
            </div>
        )
    }
};

export default HomePage;

