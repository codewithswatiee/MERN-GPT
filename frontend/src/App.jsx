import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async() => {
      try {
        setLoading(true);
        setError(false)
        const response = await axios.get('/api/products')
        console.log(response.data)
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
          setError(true)
          setLoading(false)
      }
    })()
    
  }, []);

  if(error){
    return <div>Error</div>
  }

  if(loading){
    return <div>Loading...</div>
  }
  return (
    <>
      <h1>HI EVERYONE!</h1>
      <h2>NUmber of products are: {products.length}</h2>
    </>
  )
}

export default App
