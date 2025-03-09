import React, { useEffect, useState } from 'react'

const Home = () => {
    const [products, setProducts] = useState([])
    console.log(products);
    
    const fetchProducts = async() => {
        const token = localStorage.getItem('token')
        if(!token){
            alert('Please Login')
            console.log("abc");
            
            return;
        }
        try{
            const response = await fetch('http://localhost:7000/product', {
                method:"GET",
                headers:{
                    'Authorization': token
                }
            })
            const data = await response.json();
            console.log(data,"data");
            
            setProducts(data)
        }catch(err){
            console.log(err,"err");
        }
    }

    useEffect(()=>{
        fetchProducts()
    },[])
    console.log(products);

  return (
    <div>
        <h1>Home</h1>
        {products.map((item)=>(
            <>
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
            </>
        ))}
    </div>
  )
}

export default Home