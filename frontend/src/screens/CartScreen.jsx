import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import Message from '../components/Message';
// actions
import { addToCart } from '../actions/cartActions';

const CartScreen = ({ match, location, history }) => {
  // get id
  const productId = match.params.id;
  // get quantity
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  // define dispatch
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return <div> Cart</div>;
};

export default CartScreen;
