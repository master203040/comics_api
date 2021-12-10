import React from 'react';

const Cards = () => {
    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card bg-dark text-white">
                      <img src="..." class="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;