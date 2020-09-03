import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: '',
            item_id: '',
            transaction_type: '',
            item: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        const access_token = localStorage.getItem('token');
        axios.get(`http://127.0.0.1:8000/store/catalog_item/${this.props.match.params.id}/`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${access_token}`
            },
        })
            .then(response => {
                this.setState({item: response.data, item_id: response.data.id})
                console.log('items ', this.state.items)
            }).catch(error => console.log(error))
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        const access_token = localStorage.getItem('token');
        const data = {
            quantity: this.state.quantity,
            transaction_type: this.state.transaction_type,
            item_id: this.state.item_id,
        }
        event.preventDefault();
        console.log('A name was submitted: ' + this.data);
        axios.post('http://127.0.0.1:8000/store/transaction/',
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
        const {quantity, transaction_type, item_id} = this.state;
        /* if(!localStorage.getItem('token')){
             return <Redirect to="/login" />
         }*/
        return (
            <div className="container mt-4" id="item-form">
                <div className="card shadow p-3 mb-5 bg-white rounded">
                    <div className="card-body">
                        <h2 className="card-title mb-4">Add Catalog Item</h2>
                        <form onSubmit={this.handleSubmit}>

                            {/*quantity*/}
                            <div className="form-group row">
                                <label className="col-4" htmlFor="quantity">Quantity:</label>
                                <input type="number" min="0" className="form-control col-8" id="quantity"
                                       name="quantity" defaultValue={quantity} onChange={this.handleChange}
                                       placeholder="Enter Quantity" required/>
                            </div>

                            {/* Items */}
                            <div className="form-group row">
                                <label className="col-4" htmlFor="item">Items:</label>
                                <input type="text" className="form-control col-8" id="item"
                                       value={this.state.item.name}/>
                               {/* <select className="form-control col-8" id="item"
                                        value={this.state.item_id}
                                        name="item_id" onChange={this.handleChange}>
                                    <option value="">-------------</option>
                                    {this.state.items.map((item) =>
                                        <option value={item.id} key={item.id}
                                        >{item.name}</option>)}
                                </select>*/}
                            </div>

                            {/* transaction types */}
                            <div className="form-group row">
                                <label className="col-4" htmlFor="transaction_type">Transaction Type:</label>
                                <select className="form-control col-8" id="transaction_type"
                                        value={this.state.transaction_type}
                                        name="transaction_type" onChange={this.handleChange}>
                                    <option value="">-------</option>
                                    <option value="1">Positive</option>
                                    <option value="0">Negative</option>

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

export default Transaction;