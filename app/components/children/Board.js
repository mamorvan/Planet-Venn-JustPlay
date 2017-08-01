import React, {Component} from 'react';
import { Row, Col } from "react-grid-system";

//dumb component
const Board = () => {
    return (
        <div>   
            <Row>
             
                <div id="venn">                    
                    <div id="category1" data-rule="red" ></div>
                    
                    <div id="category3" data-rule="TBD" ></div>
        
                    <div id="category2" data-rule="sun" ></div>           
                </div>
   
            </Row>           
            <div>
                <div>
                    
                    <div id="category5" data-rule="TBD" ></div>
                    
                    <img id="category4" data-rule="TBD" src="./images/blackhole2.gif" />                 
                </div>     
            </div>
        </div>
    );
};

export default Board;

