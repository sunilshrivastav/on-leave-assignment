import React, {Component} from "react";
import {Button} from "react-bootstrap";
import {Redirect} from 'react-router-dom'

const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            referrer: ''
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({referrer: e.target.textContent})
    }

    render() {
        const {referrer} = this.state;
        if (/Leave/i.test(referrer)) {
            return <Redirect to="/login"/>
        }
        else if (/Admin/i.test(referrer)) {
            return <Redirect to="/admin"/>
        }
        return (
            <div className="well" style={wellStyles}>
                <Button bsStyle="primary" bsSize="large" block
                        onClick={this.handleClick}>
                    On-Leave Login
                </Button>
                <Button bsSize="large" block
                        onClick={this.handleClick}>
                    Admin Login
                </Button>
            </div>
        )
    }
}

export default Home;