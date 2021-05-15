import React, { useEffect, Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './container/Home'
import Chat from './container/Chat'
import Login from './container/Login'
import Member from './container/Member'



class App extends Component {
    constructor(props) {
        super(props);

        this.handleLogOut = this.handleLogOut.bind(this)
    }


    handleLogOut() {
        console.log(this.props)
        this.props.dispatch({
            type: 'LOGOUT'
        })
    }


    render() {
        const SessionRoute = () => {
            console.log(this.props.auth)
            if (this.props.auth) {
                return (
                    <div>
                        <Route path="/Home" component={Home} />
                        <Route path="/Chat" component={Chat} />
                        <Route path="/Member" component={Member} />
                    </div>
                )
            } else {
                return (
                    <Login />
                )
            }
        };

        return (
            <div className="App">
                <Router>
                    <div>
                        <ul>
                            <li><Link to="/Home">HOME</Link></li>
                            <li><Link to="/Chat">Chat</Link></li>
                            <li><Link to="/Member">Member</Link></li>

                            <button onClick={this.handleLogOut}>logout</button>

                            <SessionRoute />
                        </ul>
                    </div>
                </Router>
            </div>
        );
    }
}


// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (store) => ({
    auth: store
});

/*
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/



// 데이터와 함수들이 props 로 붙은 컴포넌트 생성
const conectedComponent = connect(
    mapStateToProps
)(App);


export default conectedComponent;
