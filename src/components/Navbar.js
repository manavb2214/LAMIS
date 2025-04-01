import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaSearch, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #34495e; /* Dark blue-gray */
  color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #ffffff;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NavIcon = styled.div`
  position: relative;
  cursor: pointer;
  color: #ffffff;
`;

const CartCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #ff6f61;
  color: white;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
`;

const LanguageToggle = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: #ffffff;
`;

const MenuIcon = styled(FaBars)`
  color: #ffffff;
  cursor: pointer;
`;

const SearchIcon = styled(FaSearch)`
  color: #ffffff;
  cursor: pointer;
`;

const UserIcon = styled(FaUser)`
  color: #ffffff;
  cursor: pointer;
`;

const HeartIcon = styled(FaHeart)`
  color: #ffffff;
  cursor: pointer;
`;

const CartIcon = styled(FaShoppingCart)`
  color: #ffffff;
  cursor: pointer;
`;

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <NavLinks>
        <MenuIcon style={{ marginRight: '1rem' }} />
        <SearchIcon style={{ marginRight: '1rem' }} />
        <LanguageToggle>العربية</LanguageToggle>
      </NavLinks>
      <Logo>LAMIS</Logo>
      <NavLinks>
        <NavIcon onClick={() => navigate('/login')}>
          <UserIcon />
        </NavIcon>
        <NavIcon onClick={() => navigate('/wishlist')}>
          <HeartIcon />
        </NavIcon>
        <NavIcon onClick={() => navigate('/cart')}>
          <CartIcon />
          {cart.length > 0 && <CartCount>{cart.length}</CartCount>}
        </NavIcon>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;