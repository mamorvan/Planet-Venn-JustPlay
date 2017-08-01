import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from"react-router";

class HomePage extends Component {

    render() {
        return (
            <div className="home-page">
                <header>
                    <h1><img src="/images/planet.jpg" alt="blue planet" width="100"/> Planet Venn</h1>
                    
                    <Link to="/play"><RaisedButton label="Play" primary={true} className="button-spacing" /> </Link>
                    
                </header>
               
            </div>
        )
    }

};

export default HomePage;

