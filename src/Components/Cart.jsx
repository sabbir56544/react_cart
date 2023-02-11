import React from 'react';
import CData from './CData';

const Cart = (props) => {
    const { cart, handleDelete } = props;
    console.log("cart" + cart);

    let total = 0;
    for (const product of cart) {
        total = parseInt(total) + parseInt(product.price);
    }
    console.log(total);

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    Cart Items - {cart.length}
                    {total}
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((val, ind) => {
                                    return (
                                        <tr>
                                            <th scope="row">{val}</th>
                                            <td>{val.name}</td>
                                            <td>{val.description}</td>
                                            <td>{val.price}</td>
                                            <td>
                                                <button onClick={() => handleDelete(val)} className="btn btn-sm btn-danger">Remove</button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;