import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartContainer = styled.div`
  padding: 2rem;
  background-color: #ffffff;
  color: #333333;
  min-height: 80vh;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const CartTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ItemImage = styled.div`
  width: 100px;
  height: 100px;
  background-color: #e0e0e0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemDetails = styled.div`
  flex: 1;
  margin-left: 1rem;
`;

const RemoveButton = styled.button`
  background-color: #ff6f61;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
`;

const TotalSection = styled.div`
  margin-top: 2rem;
  text-align: right;
`;

const DiscountText = styled.p`
  color: #28a745;
  font-weight: bold;
`;

const ContinueButton = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #ff6f61;
  color: white;
  text-decoration: none;
  border-radius: 5px;
`;

const EmptyCart = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
`;

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const calculateTotal = () => {
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const discount = cart.length >= 2 ? subtotal * 0.15 : 0;
    return subtotal - discount;
  };

  return (
    <CartContainer>
      <CartTitle>My Shopping Bag</CartTitle>
      {cart.length === 0 ? (
        <EmptyCart>
          <p>Empty Cart</p>
          <ContinueButton to="/">Return to the main page</ContinueButton>
        </EmptyCart>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id}>
              <ItemImage>xxxx</ItemImage>
              <ItemDetails>
                <h3>{item.name}</h3>
                <p>SR {item.price}</p>
              </ItemDetails>
              <RemoveButton onClick={() => removeFromCart(item.id)}>
                Remove
              </RemoveButton>
            </CartItem>
          ))}
          <TotalSection>
            {cart.length >= 2 && (
              <DiscountText>15% off applied (Buy 2 or more)</DiscountText>
            )}
            <h3>Total: SR {calculateTotal().toFixed(2)}</h3>
            <ContinueButton to="/">Continue Shopping</ContinueButton>
          </TotalSection>
        </>
      )}
    </CartContainer>
  );
};

export default CartPage;