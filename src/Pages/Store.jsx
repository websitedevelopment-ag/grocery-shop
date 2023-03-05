import { useEffect, useState } from "react"
import styled from "styled-components";
import ProductCard from "../Components/ProductCard";
import { db } from '../firebase-config';
import { collection, getDocs } from "firebase/firestore";

const Store = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getDocs(collection(db, "products"))
      .then((querySnapshot) => {
        // const newData = querySnapshot.docs
        //     .map((doc) => ({...doc.data(), id:doc.id }));
        // setTodos(newData);                
        setProducts(querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id })));
      })
  }, [])
  return (
    <>
      <Heading>
        <h1>Browse the Store!</h1>
        <p>New Arrivals for you! Check out our selection of products.</p>
      </Heading>
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </>
  );
};
const Heading = styled.div`
  margin-top: 8rem;
  text-align: center;
`;

const ProductsContainer = styled.div`
  max-width: 1024px;
  width: 80%;
  margin: 70px auto 0;
  gap: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
`;

export default Store;
