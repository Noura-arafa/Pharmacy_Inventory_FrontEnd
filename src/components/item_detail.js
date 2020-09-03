import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function ItemDetails({match}) {
    const titleStyle = {
        color: 'blue'
    }
    useEffect(() => {
        fetchItem();
    }, []);
    const [item, setItem] = useState({});
    const fetchItem = async () => {
        const access_token = localStorage.getItem('token');
        const fetchItem = await fetch(`http://127.0.0.1:8000/store/catalog_item/${match.params.id}/`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${access_token}`
            },
        });
        const item_details = await fetchItem.json()
        setItem(item_details);
        console.log('iteem', item_details);
    };
    return (
        <div className="container card shadow p-3 mb-5 bg-white rounded">
            <div className="card-body ">
                <h2 className="card-title mb-4 text-left" style={titleStyle}>Item Details:</h2>
                <div className="row">
                <h3 className="col text-left">Name: {item.name}</h3>
                <h3 className="col text-left">Price: {item.price}</h3>
                </div>
                <div className="row">
                    <h3 className="col text-left">Stock: {item.quantity}</h3>
                    <h3 className="col text-left">Type: {item.type_name}</h3>
                </div>
                <div className="row">
                    <h3 className="col text-left">Description: {item.description}</h3>
                </div>
                <div className="row">
                    <div className="col text-right">
                        <Link to={`/transaction/${item.id}`}>
                        <button className="btn btn-primary">Transaction</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ItemDetails;