import React, { Component } from 'react';
import './back-button.component.css';
import { Link } from 'react-router-dom';
export class BackButtonComponent extends Component {
    render() {
        return(
            <div className="back-button-component">
                <Link to="/"><span>⬅ Back</span></Link>
            </div>
        );
    }
}