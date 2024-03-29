import React from "react";
import axios from "axios";
import Products from "../Product/Products";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { getAllProducts } from "../../actions/productAction";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import Filtre from "../Filtre/Filtre";
import Carrousel from "../Caroussel/Caroussel";

function Home() {
  const getallproductsstate = useSelector(
    (state) => state.getAllProductsReducer
  );
  const { loading, products, error } = getallproductsstate;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <Filtre />
      <Carrousel products={products}/>
      <hr />
      <div className="homeContainer">
        {loading ? (
          <Loader />
        ) : error ? (
          <Error error="Something wrong!" />
        ) : (
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {products.map((product) => {
                return (
                  <div className="zoomoutcard col-md-3 mt-5 m-2 card p-2 shadow p-3 mb-5 bg-white rounded"
                  >
                    <Products product={product} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
