import React from "react";
import {removeToCart} from '../actions';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const Cart = (props) => {
    const totalPrice = props.cart.reduce((total,item) => (total += item.price),0);
    console.log(props)
    return (
        <div>
            <h2>
                <Link to="/">Kitap Listesi</Link> <span>Sepetim</span>
            </h2>

            <h3>Toplam Sepet Tutarı: &#8378;{totalPrice.toFixed(2)}</h3>

            {props.cart.map(book => (
                <div key={book.id} className="book">
                    <img
                        src={book.image}
                        alt={book.name}
                    />
                    <div>
                        <h4>{book.name}</h4>
                        <p>Yazar: {book.author}</p>
                        <p>Fiyat: &#8378;{book.price}</p>
                        <p>Sepetinizde bu kitaptan toplam 1 adet var.</p>
                        <button onClick={() => props.removeToCart(book.id)}>Sepetten Çıkar</button>
                    </div>
                </div>

            ))}
        </div>
    );
};

const mapStateProps = state => {
    return {
        bookList : state.bookList,
        cart: state.cart,
    }
}

export default connect(mapStateProps,{removeToCart})(Cart);
