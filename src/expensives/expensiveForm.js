import React from 'react';
import { Expensive, CategoryDTO } from './expensive';
import ExpensiveService from './expensiveService';
import store from '../store';
import CategoryService from '../categories/categoryService';

export default class ExpensiveForm extends React.Component {
    constructor(props) {
        super(props);
        this.expensiveService = new ExpensiveService();
        this.categoryService = new CategoryService();
        this.state={
            expensive:{
                name: {
                    value: ""
                },
                category: {
                    value: ""
                },
                description: {
                    value: ""
                },
                price: {
                    value:0
                }
            },
            categories: []
        }

        store.subscribe(() => {
            this.setState({
                categories: store.getState().categories
            })
        })

        this.saveExpensive = this.saveExpensive.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.categoryService.getAllCategories();
    }

    populateExpensive() {
        let expensive = new Expensive();
        expensive.name = this.state.expensive.name.value;
        expensive.price = this.state.expensive.price.value;
        expensive.description = this.state.expensive.description.value;
        let categoryDTO = new CategoryDTO();
        categoryDTO.id = this.state.expensive.category.value;
        expensive.categoryDTO = categoryDTO;
        return expensive;
    }
    saveExpensive() {
        const expensive = this.populateExpensive();
        this.expensiveService.saveExpensive(expensive);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
            expensive: {
                ...this.state.expensive,
                [name]: {
                ...this.state.expensive[name],
                value
            }
            }
        });
    }

    render() {
        return (
            <div>
                <label>Nombre:</label>
                <input type="text" name="name"
                value={this.state.expensive.name.value} onChange={this.handleChange}></input>            
                <select name="category" onChange={this.handleChange} value={this.state.expensive.category.value}>
                    {
                        this.state.categories.map((category) => {
                            return <option id={category.name} value={category.id}>{category.name}</option>
                        })
                    }
                </select>
                <label>Description:</label>
                <input type="text" name="description"
                value={this.state.expensive.description.value} onChange={this.handleChange}></input>
                <label>Precio:</label>
                <input type="number" name="price"
                value={this.state.expensive.price.value} onChange={this.handleChange}></input>
                <button onClick={this.saveExpensive}>Save</button>
            </div>
        )
    }
}