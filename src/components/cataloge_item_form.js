import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class ItemForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {types: []};
        this.state = {
            name: '',
            price: '',
            description: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /*componentDidMount() {
        axios.get('http://127.0.0.1:8000/store/drug_types/')
            .then(response => {
                this.setState({types: response.data})
            }).catch(error => console.log(error))
    }*/

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state);
    }

    handleSubmit(event) {
        const access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTk5MjM1NTc3LCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsIm9yaWdfaWF0IjoxNTk5MDU1NTc3fQ.4mhYDGN6smwGTVG7qeix_fqwIxworZ30sBvs1AqZEjQ';
        event.preventDefault();
        console.log('A name was submitted: ' + this.state.name);
        axios.post('http://127.0.0.1:8000/store/catalog_item/',
            this.state, {
                headers: {
                    'Accept' : 'application/json',
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
        return (
            <div className="container mt-4">
                <div className="card shadow p-3 mb-5 bg-white rounded">
                    <div className="card-body">
                        <h2 className="card-title mb-4">Add Catalog Item</h2>
                        <form onSubmit={this.handleSubmit}>

                            {/*Item Name*/}
                            <div className="form-group row">
                                <label className="col-4" htmlFor="name">Drug Name:</label>
                                <input type="text" className="form-control col-8" id="name"
                                       name="name" defaultValue={name} onChange={this.handleChange}
                                       placeholder="Enter Drug Name"/>
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