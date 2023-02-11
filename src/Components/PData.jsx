import React from 'react';

const PData = (props) => {
    return (
        <>
            <div className="col-lg-4 mt-2">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{props.val.name}</h5>
                        <p className="card-text">{props.val.description}.</p>
                        <p>Price - {props.val.price}</p>
                        <a href className="btn btn-warning" onClick={ () => props.handleCart(props.val.id) }>Add Cart</a>

                    </div>
                </div>
            </div>
        </>
    );
};

export default PData;