import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

class ItemTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {items: []}
    }

    componentWillMount() {
        const access_token = localStorage.getItem('token');
        axios.get('http://127.0.0.1:8000/store/catalog_item/', {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${access_token}`
            },
        })
            .then(response => {
                this.setState({items: response.data})
                console.log('items ', this.state.items)
            }).catch(error => console.log(error))
    }

    render() {
        return (
            <div className="container">
                <h2 > Click on Item Name to view Details</h2>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Type</th>
                        <th scope="col">Date Created</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.items.map((item) => <tr>
                        <td><Link to={`/item/${item.id}`}>{item.name}</Link></td>
                        <td>{item.price}</td>
                        <td>{item.type.type}</td>
                        <td>{item.date_created}</td>
                    </tr>)}
                    </tbody>
                </table>
            </div>


        );
    }

}

export default ItemTable;