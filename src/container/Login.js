import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
    constructor(props) {
        super(props)

        this.authGoogle = this.authGoogle.bind(this);
        this.logout = this.logout.bind(this);
    }

    authGoogle(e) {
        e.preventDefault();
        this.props.dispatch({ type: 'LOGIN_GOOGLE' })

    }
    logout() {

    }

    render() {
        return (
            <div>
                <button onClick={ this.authGoogle }>google</button>
                <button onClick={ this.logout }>logout</button>
            </div>
        )
    }
}

export default connect(
)(Login);