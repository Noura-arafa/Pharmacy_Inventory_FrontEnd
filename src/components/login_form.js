import React, {Component} from 'react';
import axios from 'axios';
import ItemForm from "./cataloge_item_form";
import { withRouter } from "react-router-dom";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/auth/login/', this.state,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then(response => {
                console.log(response.data.token);
                localStorage.setItem('token', response.data.token);
                this.props.history.push('/item')
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() {
        const {username, password} = this.state;
        return (
            <div className="container mt-4">
                <h2 className="card-title mb-4">Login</h2>
                <form onSubmit={this.handleSubmit}>

                    {/* UserName*/}
                    <div className="form-group row">
                        <label className="col-4" htmlFor="username">UserName:</label>
                        <input type="text" className="form-control col-8" id="username"
                               name="username" defaultValue={username} onChange={this.handleChange}
                               placeholder="Enter UserName" required/>
                    </div>

                    {/* Password */}
                    <div className="form-group row">
                        <label className="col-4" htmlFor="password">Password:</label>
                        <input type="password" className="form-control col-8" id="password"
                               name="password" defaultValue={password} onChange={this.handleChange}
                               placeholder="Enter Password" required/>
                    </div>

                    {/*Submit button */}
                    <div className="row float-right">
                        <input className="btn btn-primary
                                " type="submit" value="Submit"/>
                    </div>
                </form>

            </div>
        );
    }
}

export default LoginForm;
