import React from 'react';
import { Row, Col } from 'react-grid-system';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import UserIcon from 'material-ui/svg-icons/action/account-circle';
import {cyan500} from 'material-ui/styles/colors';
import { Link } from "react-router";

import Score from './children/Score';
import Pieces from './children//Pieces';
import Board from './children/Board';
import Options from './children/Options';
import Footer from './children/Footer';
               
class DashboardPage extends React.Component {

  render() {
    return (
      <div>
    
        <nav> 
            <Row>
                <Col sm={5}>
                    <Score />
                </Col>
            
                <Col sm={2}>
                    <Link to="/"><h1 id="logo">Planet Venn</h1></Link>
                </Col>
                
            </Row>
        </nav>

        <Row>
            <Col sm={4}>
                <Pieces />
            </Col>
            
            <Col sm={8}>
                <Board />
            </Col>
        </Row>
        <Options />
        
        <Footer />

      </div>
    );
  }
}
export default DashboardPage;

