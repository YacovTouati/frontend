import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../componnets/Product";
import axios from "axios";

// מעדכן את מסך הבית עם קבלת המידע של כל המוצרים
const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('about to fetch products in HomeScreen');
    const fetchProducts = async () => {
      const { data } = await axios.get('http://localhost:5000/api/products/');
 
      setProducts(data);
    };
    fetchProducts();
  }, []);



  return (
    <>
      <h1>Latesd products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
