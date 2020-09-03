import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

// import { Redirect } from 'react-router-dom';

class ItemForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {types: []};
        this.state = {
            name: '',
            price: '',
            description: '',
            type_id: '',
            types: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        const access_token = localStorage.getItem('token');
        axios.get('http://127.0.0.1:8000/store/drug_types/', {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${access_token}`
            },
        })
            .then(response => {
                this.setState({types: response.data})
                console.log('types ', this.state.types)
            }).catch(error => console.log(error))
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state);
    }

    handleSubmit(event) {
        const access_token = localStorage.getItem('token');
        const data = {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description,
            type_id: this.state.type_id
        }
        event.preventDefault();
        console.log('A name was submitted: ' + this.data);
        axios.post('http://127.0.0.1:8000/store/catalog_item/',
            data, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${access_token}`
                },
            })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const {name, price, description} = this.state;
        /* if(!localStorage.getItem('token')){
             return <Redirect to="/login" />
         }*/
        return (
            <div className="container mt-4" id="item-form">
                <div className="card shadow p-3 mb-5 bg-white rounded">
                    <div className="card-body">
                        <h2 className="card-title mb-4">Add Catalog Item</h2>
                        <form onSubmit={this.handleSubmit}>

                            {/*Item Name*/}
                            <div className="form-group row">
                                <label className="col-4" htmlFor="name">Drug Name:</label>
                                <input type="text" className="form-control col-8" id="name"
                                       name="name" defaultValue={name} onChange={this.handleChange}
                                       placeholder="Enter Drug Name" required/>
                            </div>

                            {/* Item Price */}
                            <div className="form-group row">
                                <label className="col-4" htmlFor="price">Drug Price:</label>
                                <input type="number" min="0" className="form-control col-8" id="price"
                                       name="price" defaultValue={price} onChange={this.handleChange}
                                       placeholder="Enter Drug Price"/>
                            </div>

                            {/* Item description */}
                            <div className="form-group row">
                                <label className="col-4" htmlFor="description">Description:</label>
                                <input type="text" className="form-control col-8" id="description"
                                       name="description" defaultValue={description} onChange={this.handleChange}
                                       placeholder="Enter Drug Description"/>
                            </div>

                            {/* Drug Type */}
                            <div className="form-group row">
                                <label className="col-4" htmlFor="price">Drug Type:</label>
                                <select className="form-control col-8"
                                        value={this.state.type_id}
                                        name="type_id" onChange={this.handleChange}>
                                    <option value="">-------</option>
                                    {this.state.types.map((type) =>
                                        <option value={type.id} key={type.id}
                                                >{type.type}</option>)}
                                </select>
                            </div>

                            {/*Submit button */}
                            <div className="row float-right">
                                <input className="btn btn-primary
                                " type="submit" value="Submit"/>
                            </div>
                        </form>

                    </div>
                    {/*Card body*/}
                </div>
                {/* Card*/}

            </div>


        );
    }
}

export default ItemForm;