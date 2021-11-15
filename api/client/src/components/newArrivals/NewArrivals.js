import React, { useState, useEffect } from 'react';
import './newArrivals.scss';
import Product from '../product/Product';
import axios from "axios";

const NewArrivals = ({ cat }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat
                        ? `https://makecom.herokuapp.com/api/products?category=${cat}`
                        : "https://makecom.herokuapp.com/api/products"
                );
                setProducts(res.data);
            } catch (err) { }
        };
        getProducts();
    }, [cat]);

    return (
        <div className="newArrivals">
            <div className="naTitle">
                <h2>New Arrivals</h2>
            </div>
            <hr />
            <div className="products-wrapper">
                {
                    products
                        .slice(0,6)
                        .map((item, id) => (
                            <div className="card-wrapper" key={id}>
                                <Product
                                    img={item.img}
                                    title={item.title}
                                    price={item.price}
                                    _id={item._id}
                                />
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default NewArrivals