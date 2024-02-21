import React from 'react';
import { Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

const Cart = ({ add, setAdd, handleDelete }) => {
  const qts = [1, 2, 3, 4, 5];

  const handleQuantityChange = (itemId, value) => {
    const updatedAdd = add.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: value };
      }
      return item;
    });
    setAdd(updatedAdd);
  };

  // Calculate total price and discount for the entire cart
  const totalPrice = add.reduce((total, item) => {
    return total + (item.quantity || 1) * item.price;
  }, 0);

  const discount = Math.floor(totalPrice * 0.2); // 20% discount

  return (
    <div className='h d-lg-flex d-md-flex justify-content-between mx-4 '>
      <div className='d-flex flex-lg-row flex-md-column'>
        <div className="cart mx-auto mt-5 text-start">
          {add.length === 0 ? (
            <h1 className='text-light text-end'>No Items added</h1>
          ) : (
            add.map((item) => (
              <div key={item.id} className='px-3 py-2 bg-light rounded-1 d-lg-flex '>
                <img src={item.image} alt="" width='250px' height='180px' className='my-auto' />
                <div className='mx-5'>
                  <div className='itemname'>
                    <h3 className='text-dark' key={item.name}>{item.name}</h3>
                    <h2 className='mx-5'>₹{!item.quantity ? item.price : item.price * item.quantity}</h2>
                  </div>
                  <p>In stock</p>
                  <p className='text-success'>Eligible for free shipping</p>
                  <div className='row gap-2'>
                    <label htmlFor="" className='mx-2 fw-600 col-2 my-auto'>Qty</label>
                    <select
                      name="qty"
                      id="qty"
                      className='col-2 my-auto'
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    >
                      {qts.map((el) => (
                        <option key={el} value={el}>{el}</option>
                      ))}
                    </select>
                    <Button className='col-4 mx-lg-2 mx-md-2 my-auto bg-danger' onClick={() => handleDelete(item.id)}>Delete</Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {add.length > 0 && (
        <div className='sidebar bg-light my-5 rounded-1 bsw text-start p-3 fw-bold d-flex flex-column justify-content-lg-center'>
          <h3>Price Details</h3>
          <div className='d-flex justify-content-between mx-2'>
            <p>Discount</p>
            <h5>₹{discount}</h5>
          </div>
          <div className='d-flex justify-content-between mx-2'>
            <p>Delivery Charge</p>
            <h5>₹20</h5>
          </div>
          <div className='d-flex justify-content-between mx-2'>
            <p>Price</p>
            <h5>₹{totalPrice - discount}</h5>
          </div>
          <div className='d-flex justify-content-between mx-2'>
            <p>Billing Total Price</p>
            <h5>₹{totalPrice - discount + 20}</h5>
          </div>
          <h5 className='text-center text-success'>
            You will save ₹{discount} on this order
          </h5>
          <Button variant='warning w-100 mt-2'>Place order</Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
