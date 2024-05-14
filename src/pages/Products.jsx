import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"


const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("");

  const getData = async() => {
    try {
      const {data}= await axios.get(
        `https://dummyjson.com/products/search?q=${search}`
      );
      setProducts(data.products)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
  getData();
  }, []);
  
  return (
    <div>
      <ProductCard/>
    </div>
  )
}

export default Products
