import React from 'react';
import ExpensiveService from './expensiveService';
import store from '../store';
import Moment from 'moment';

const dateFormat = 'DD MMM YYYY';

export default class ExpensiveList extends React.Component {
    
    constructor(props){
        super(props);
        this.expensiveService = new ExpensiveService();
        this.state = {
            expensives: []
        }
        store.subscribe(() => {
            this.setState({
                expensives: store.getState().expensives
            })
        })
    }

    componentDidMount () {
        this.expensiveService.getAllExpensives();
    }

    render() {
        return (
            <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>description</th>
                    <th>category</th>
                    <th>price</th>
                    <th>date</th>        
                </tr>
                { this.state !== undefined && this.state.expensives !== undefined &&
                    this.state.expensives.map((expensive) => {
                        return <ExpensiveRow expensive={expensive}></ExpensiveRow>
                    })
                }
                
            </table>
        )
    }
}

class ExpensiveRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.expensive.id}</td>
                <td>{this.props.expensive.name}</td>
                <td>{this.props.expensive.description}</td>
                <td>{this.props.expensive.categoryDTO.name}</td>
                <td>{this.props.expensive.price}</td>
                <td>{Moment(this.props.expensive.created).format(dateFormat)}</td>
            </tr>
        )
    }
}