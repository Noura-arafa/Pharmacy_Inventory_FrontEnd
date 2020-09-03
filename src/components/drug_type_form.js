import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

// import { Redirect } from 'react-router-dom';

class DrugTypeForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {types: []};
        this.state = {
            type:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state);
    }

    handleSubmit(event) {
        const access_token = localStorage.getItem('token');
        const data = {
            type: this.state.type,
        }
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/store/drug_types/',
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
        const {type} = this.state;

        return (
            <div className="container mt-4" id="item-form">
                <div className="card shadow p-3 mb-5 bg-white rounded">
                    <div className="card-body">
                        <h2 className="card-title mb-4">Add Drug Type</h2>
                        <form onSubmit={this.handleSubmit}>

                            {/*Drug Type*/}
                            <div className="form-group row">
                                <label className="col-4" htmlFor="type">Drug Type:</label>
                                <input type="text" className="form-control col-8" id="type"
                                       name="type" defaultValue={type} onChange={this.handleChange}
                                       placeholder="Enter Drug Type" required/>
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

export default DrugTypeForm;