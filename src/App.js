import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import Purchase from './Purchase';
import About from './About';
import Description from './Description';
import { useEffect, useState } from 'react';
import SignIn from './Signin';
import SignUp from './SignUp';
import Contact from './Contact';
import Cart from './Cart';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

  




function App() {

  const data= [
    {
      name: "Rose",
      description: "Roses are red, violets are blue, sugar is sweet, and so are you.",
      image:"https://wallpapercave.com/wp/wp5382462.jpg",
      price:25,
      id:1
    },
    {
      name: "Sunflower",
      description: "Sunflowers are yellow, the sky is blue, I love you, and you love me too.",
      image:"https://wallpapercave.com/wp/wp2375041.jpg",
      price:12,
      id:2



    },
    {
      name: "Daisy",
      description: "Daisies are white, the sun is bright, you're my sunshine, my only sunshine.",
      image:"https://wallpaperaccess.com/full/351928.jpg",
      price:16,
      id:3



    },
    {
      name: "Lily",
      description: "Lilies are white, they're pure and they're true, just like the love I have for you.",
      image:"https://www.wallpapers-for-desktop.eu/desktop/close-lilies-white.jpg",
      price:14,
      id:4



    },
    {
      name: "Tulip",
      description: "Tulips are red, tulips are yellow, tulips are beautiful, just like you.",
      image:"https://images.freecreatives.com/wp-content/uploads/2015/09/colorful-tulips-wallpaper.jpg",
      price:17,
      id:5



    },
    {
      name: "Orchid",
      description: "Orchids are exotic, they're rare and they're true, just like the love I have for you.",
      image: "https://wallpapercave.com/wp/wp6445943.jpg",
      price:18,
      id:6


    },
    {
      name: "Jasmine",
      description: "Jasmines are white, they're delicate and they're sweet, just like the love I have for you.",
      image: "https://wallpapercave.com/wp/Tt9IFwe.jpg",
      price:22,
      id:7

    },
    {
      name: "Carnation",
      description: "Carnations are red, they're passionate and they're true, just like the love I have for you.",
      image: "https://wallpaperaccess.com/full/5944072.jpg",
      price:15,
      id:8


    },
    {
      name: "Iris",
      description: "Irises are blue, they're royal and they're true, just like the love I have for you.",
      image: "https://www.letsgoireland.com/wp-content/uploads/2022/06/Spring_Gentian_HaraldBiebel.jpg",
      price:14,
      id:9


    },
    {
      name: "Daffodil",
      description: "Daffodils are yellow, they're cheerful and they're true, just like the love I have for you.",
      image: "https://cdn.suwalls.com/wallpapers/flowers/daffodils-40029-2560x1600.jpg",
      price:21,
      id:10


    },
    {
      name: "Lavender",
      description: "Lavenders are purple, they're calming and they're true, just like the love I have for you.",
      image: "https://www.pixelstalk.net/wp-content/uploads/2016/07/HD-Lavender-Flower-Wallpaper.jpg",
      price:24,
      id:11


    },
    {
      name: "Chrysanthemum",
      description: "Chrysanthemums are white, they're pure and they're true, just like the love I have for you.",
      image: "https://www.wallpaperflare.com/static/129/569/73/flower-macro-petals-bud-wallpaper.jpg",
      price:19,
      id:12


    },
  ]
const [search,setSearch]=useState('')
const [formValues,setFormValues]=useState({
  email:'',
  password:'',
  mobileno:'',
  email2:'',
  password2:'',
  password3:'',
  city:'',
  pincode:'',
  
})


const [formErrors,setFormErrors]=useState({})
const [submit,setSubmit]=useState({})
const [isSubmit,setIsSubmit]=useState(false)
const [add,setAdd]=useState([])
const [count,setCount]=useState(0)
const [mutiple,setMultiple]=useState(0)


const handleDelete=(id)=>{
    const updataAdd=add.filter(item=>item.id!==id)
setAdd(updataAdd)
}
const handleInput=(event)=>{
  const newObj={...formValues,[event.target.name]:event.target.value}
  setFormValues(newObj)
}
const filtered=data.filter((item)=>{
 
  return item.name.toLowerCase().includes(search)
   }).map((item)=>(
    <Card style={{ width: '18rem' }} className='mx-2 my-5'>
   <Card.Img variant="top" src={item.image} height="200" />
   <Card.Body>
     <Card.Title>{item.name}</Card.Title>
     <Card.Text style={{height:'85px'}}>
     {item.description} 
     </Card.Text>
     <h4 className='mb-4'><span className='text-success'>price</span> ₹{item.price}</h4>
     <Button variant="warning" id='add' onClick={(e)=>setAdd([...add,item])} >Add to Cart</Button>
   </Card.Body>
 </Card>
    ))

const handleValidation=(event)=>{
event.preventDefault()
setFormErrors(Validation(formValues))
setIsSubmit(true)
}

useEffect(()=>{
if(Object.keys(formErrors).length === 0 && isSubmit){
}
},[formErrors])
const Validation=(values)=>{
  const errors={}
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
 
  if(!values.email){
     errors.email="❕ Email is Required"
  }else if(!regex.test(values.email)){
  errors.email="❕ This is not a valid email format"
  }
  if(!values.password){
     errors.password="❕ Password is Required"
  }else if(values.password.length<4){
    errors.password="❕ Password must be more than 4 characters"
  }else if(values.password.length>10){
    errors.password="❕ Password cannot exceed more than 10 characters"
  }
  if(!values.password2){
     errors.password2="❕ Password 2 is Required"
  }else if(values.password2.length<4){
    errors.password2="❕ Password must be more than 4 characters"
  }else if(values.password2.length>10){
    errors.password2="❕ Password cannot exceed more than 10 characters"
  }
  if(!values.password3){
     errors.password3="❕ Password is Required"
  }else if(values.password3.length<4){
    errors.password3="❕ Password must be more than 4 characters"
  }else if(values.password3.length>10){
    errors.password3="❕ Password cannot exceed more than 10 characters"
  }
  if(!values.mobileno){
    errors.mobileno="❕ Mobile No is Required"
  }
  else if(values.mobileno.length<10){
    errors.mobileno="❕ This is not valid mobile No"
  }
  if(!values.city){
    errors.city="❕ City is Required"
  }
  if(!values.pincode){
    errors.pincode="❕ Pincode is Required"
  }
  return errors
 }
  return (
    <div className="App">
       <Nav/>
       

       <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        
        <Route path='/purchase'element={<Purchase
        search={search}
        setSearch={setSearch}
        add={add}
        setAdd={setAdd}
        data={data}
        filtered={filtered}
    
        
      
     
      />}/>
        <Route path='/signin'element={<SignIn
        formErrors={formErrors}
        handleInput={handleInput}
        handleValidation={handleValidation}
        />}/>
        <Route path='/signup'element={<SignUp
        formErrors={formErrors}
        handleInput={handleInput}
        handleValidation={handleValidation}
        />}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/cart'element={<Cart
       add={add}
       item={filtered.item}
       filtered={filtered}
       multiple={mutiple}
       setMultiple={setMultiple}
       handleDelete={handleDelete}
        />}/>
      
       </Routes>

    </div>
  );
}

export default App;
