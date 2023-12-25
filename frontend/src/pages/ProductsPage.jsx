import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Newsletter from "../components/Layout/Newletter";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import { createContext } from "react";
import { useContext } from "react";
import Navbar from "../components/Layout/Navbar";
import SearchBar from "./SearchBar";

export const CartContext = createContext();

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const { allProducts, isLoading } = useSelector((state) => state.products);
  const [data, setData] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    if (allProducts) {
      if (categoryData === null) {
        const filteredData = allProducts.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setData(filteredData);
      } else {
        const filteredData =
          allProducts &&
          allProducts.filter(
            (product) =>
              product.category === categoryData &&
              product.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
        setData(filteredData);
      }
    }
  }, [allProducts, categoryData, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Navbar activeHeading={3} />
          <br />
          <br />
          <div className="flex justify-center mt-40">
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className={`${styles.section} mt-10`}>
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
              {data &&
                data.map((i, index) => <ProductCard data={i} key={index} />)}
            </div>
            {data && data.length === 0 ? (
              <h1 className="text-center w-full pb-[100px] text-[20px]">
                No products Found!
              </h1>
            ) : null}
          </div>
          <Newsletter />
          <Footer />
        </div>
      )}
    </>
  );
};

export default ProductsPage;
