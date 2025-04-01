import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #e0e0e0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #666;
`;

const ProductName = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #ff6f61;
  font-weight: bold;
`;

const AddButton = styled.button`
  background-color: #ff6f61;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e65b50;
  }
`;

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Card>
      <ProductImage>xxxx</ProductImage>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>SR {product.price}</ProductPrice>
      <AddButton onClick={() => addToCart(product)}>Add to Cart</AddButton>
    </Card>
  );
};

export default ProductCard;