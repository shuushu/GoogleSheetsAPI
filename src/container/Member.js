import React, { Component } from 'react'
import { connect } from 'react-redux'
let item;

class Member extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: []
        }
    }

    componentDidMount() {
/*
        item = firebase.database().ref('chat/users').on('value', snap => {
            this.setState({
                item: snap.val()
            })
            this.props.dispatch(reqState('INIT', 'SUCCESS'))
        })*/
    }

    render() {
        /*const mappingItem = (item) => {
            let data = Object.keys(item).reduce((result, key)  => {
                result[key] = item[key].displayName
                return result
            }, {});

            console.log(data)
        }*/

        return (
            <div>
                <div>
                    {/*{ this.props.isLoading ? mappingItem(this.state.item) : <div>로딩중</div>}*/}
                </div>
                MEMBVER
            </div>
        )
    }
}


export default connect(

)(Member)