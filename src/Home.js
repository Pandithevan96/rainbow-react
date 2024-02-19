import React from 'react'
import Image from 'react-bootstrap/Image';

const Home = () => {
  return (
    <div>
      <div className='text-dark  bg-light p-3 text-center'>
      <h1 className=''>Welcome to <span className='custext'>Rinbow Garden</span> </h1>
      <h2 className=' mt-2p-4'>"Petals of Perfection, Blooms of Bliss - Your Satisfaction, Our Commitment!"</h2>
      </div>
      <div  className='container-fluid d-lg-flex p-4'>
   <Image src="https://images7.alphacoders.com/679/thumb-1920-679657.jpg" 
   height="600"
   width="600"
   className='mt-2 mx-lg-5 rounded img-thumbnail p-2 bsw'
   fluid />
   <div>
   <h1 className='mt-2 mx-5  mb-4 text-danger hl'>Special Features</h1>
   <div className=' feat mx-3'>
    <p>✔ Special Occasion Promotions: "Celebrate with Savings"</p>
    <p>✔ Shop by Occasion: "Flowers for Every Moment"</p>
    <p>✔ Seasonal Flowers: "Blooms of the Season"</p>
    <p>✔ Best Sellers: "Customer Favorites"</p>
    <p>✔ Personalized Recommendations: "Made for You"</p>
   </div>
   </div>
    </div>
    </div>
  )
}

export default Home

    

    
 
