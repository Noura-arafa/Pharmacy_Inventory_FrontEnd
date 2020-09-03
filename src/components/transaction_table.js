import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

class TransactionTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {transactions: [], filterStr: '', filterByType: ''}
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        /* let filteredData = this.state.transactions.filter(e => e.item.name.includes(event.target.value))
         this.setState({transactions: filteredData})*/
        const access_token = localStorage.getItem('token');
        console.log('heteteettet')
        const filterName = event.target.name;
        axios.get(`http://127.0.0.1:8000/store/transaction/?${filterName}=${event.target.value}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${access_token}`
            },
        })
            .then(response => {
                this.setState({transactions: response.data})
                console.log('items ', this.state.transactions)
            }).catch(error => console.log(error))
    }

    componentWillMount() {
        const access_token = localStorage.getItem('token');
        axios.get('http://127.0.0.1:8000/store/transaction/', {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${access_token}`
            },
        })
            .then(response => {
                this.setState({transactions: response.data})
                console.log('items ', this.state.transactions)
            }).catch(error => console.log(error))
    }

    render() {
        const {filterStr, filterByType} = this.state;
        console.log(this.state.transactions);
        const type = (value) => {
            if (value === 1) {
                return <div>Positive</div>
            } else {
                return <div>Negative</div>
            }
        }
        return (
            <div className="container">
              {/*  <div className="row float-right">
                    <input className="form-control col-6 "
                           placeholder="Filter By Item Name"
                           type="text"
                           defaultValue={filterStr}
                           name="item__name__icontains"
                           onChange={this.handleChange}/>

                    <select className="form-control col-10" id="transaction_type"
                            value={filterByType}
                            name="transaction_type" onChange={this.handleChange}>
                        <option value="">Filter by Transaction Type</option>
                        <option value="1">Positive</option>
                        <option value="0">Negative</option>

                    </select>

                </div>*/}
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Item Name</th>
                        <th scope="col">Transaction Quantity</th>
                        <th scope="col">Date</th>
                        <th scope="col">Transaction Type</th>
                        <th>
                            <input className="form-control"
                                   placeholder="Filter by Item Name"
                                   type="text"
                                   defaultValue={filterStr}
                                   name="item__name__icontains"
                                   onChange={this.handleChange}/>
                        </th>
                        <th>
                            <select className="form-control" id="transaction_type"
                                    value={filterByType}
                                    name="transaction_type" onChange={this.handleChange}>
                                <option value="">Filter by Transaction Type</option>
                                <option value="1">Positive</option>
                                <option value="0">Negative</option>
                            </select>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.transactions.map((transaction) =>
                        <tr key={transaction.id}>
                            <td>{transaction.item.name}</td>
                            <td>{transaction.quantity}</td>
                            <td>{transaction.transaction_date}</td>
                            <td>{type(transaction.transaction_type)}</td>
                            <td>

                            </td>
                            <td>

                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>


        );
    }

}

export default TransactionTable;