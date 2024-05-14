import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import SearchInput from "../components/SearchInput";
import { useProductContext } from "../context/ProductProvider";
import ScrollToTop from "../components/ScrollToTop";

const Products = () => {

  const {products, loading} = useProductContext()

  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [search, setSearch] = useState("");

  // const getData = async () => {
  //   setLoading(true)
  //   try {
  //     const { data } = await axios.get(
  //       `https://dummyjson.com/products/search?q=${search}`,
  //     );
  //     setProducts(data.products);
      
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false)
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, [search]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <SearchInput />
      <h2 className="text-2xl font-bold mt-8 tracking-tighter text-gray-900">
        All Products
      </h2>
      {loading ? (
        <Loading />
      ) : products.length ? (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <h2 className="text-center text-3xl text-red-600 mt-32">No Products</h2>
      )}
      <ScrollToTop/>
    </div>
  );
};

export default Products;
