import React from 'react'
import { Button, Dropdown } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'

const Cart = ({add,multiple,setMultiple,handleDelete,id}) => {
const qts=[1,2,3,4,5]

  return (
    <div className='h d-flex justify-content-between mx-4'>
      <div>
      <div className="cart mx-auto mt-5 text-start ">
       {add.map((item)=>(
        <>
        <div key={item.id} className='px-3 py-2 bg-light rounded-1  d-flex '>
          <img src={item.image} alt="" width='250px' height='180px' className='my-auto' />
 <div className='mx-5'>
 <div className='itemname'><h3 className='text-dark' key={item.name}>{item.name}</h3>
 
 <h2 className='mx-5' >₹{item.price*multiple}</h2>
 </div>
<p>In stock</p>
<p className='text-success'>Eligible for free shipping</p>
<div className='row '> 
<label htmlFor="" className='mx-2 fw-600 col-2 my-auto '>Qty</label>

<select name="qty" id="qty" 
className='col-2 my-auto' 
value={multiple}
onChange={(e)=>setMultiple(parseInt(e.target.value))}>
  {qts.map((el)=>{
    return <option key={el} value={el} >{el}</option>
  })
    }
  </select>
  <Button className='col-4 mx-2 my-auto bg-danger'onClick={(e)=>handleDelete(item.id)} >Delete</Button></div>
 </div>
 </div>
 </>
   ))}
  </div>
  </div>
{add.length>0 &&(
  <div className='sidebar bg-light my-5 rounded-1 bsw text-start p-3 fw-bold'>
    <h3>Price Details</h3>
    <div className='d-flex justify-content-between mx-2'><p>Discount</p><h5>123</h5></div>
    <div className='d-flex justify-content-between mx-2'><p>Delivery Charge</p><h5>123</h5></div>
    <div className='d-flex justify-content-between mx-2'><p>Price</p><h5>123</h5></div>
<h5 className='text-center text-success'>You will save ₹ on this order</h5>
<Button variant='warning w-100 mt-2'>Place order</Button>
  </div>)
}
  </div>
)}
      
  


export default Cart