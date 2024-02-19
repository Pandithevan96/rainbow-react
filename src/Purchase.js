
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function Purchase({search,setSearch,add,setAdd,filtered,item}) {
 
    return (
      <div className='' >
        <div className='mx-auto d-block w-50 mt-3'>         
          {console.log(add)}
            <Link  className='text-light '><input 
            type="text"
             class="form-control me-2 "
              value={search} 
              placeholder="Search"
              onChange={(e)=>setSearch(e.target.value)}/></Link>
            <Link  className='text-light '><button class="btn btn-outline-success text-light mt-2" type="submit">Search</button></Link>
            </div>
            <div className='container-fluid d-flex justify-content-center flex-wrap'>
{filtered}
 

</div>
      </div>
    );
  }
  
  export default Purchase;