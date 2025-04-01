import React from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';

const Container = styled.div`
  padding: 2rem;
`;

const Banner = styled.div`
  background-color: #fff5e4;
  padding: 1rem;
  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const Home = () => {
  const perfumes = [
    { id: 1, name: 'Perfume 1', price: 120 },
    { id: 2, name: 'Perfume 2', price: 150 },
    { id: 3, name: 'Perfume 3', price: 100 },
    { id: 4, name: 'Perfume 4', price: 130 },
    { id: 5, name: 'Perfume 5', price: 110 },
    { id: 6, name: 'Perfume 6', price: 140 },
    { id: 7, name: 'Perfume 7', price: 160 },
    { id: 8, name: 'Perfume 8', price: 90 },
    { id: 9, name: 'Perfume 9', price: 125 },
    { id: 10, name: 'Perfume 10', price: 135 },
  ];

  return (
    <Container>
      <Banner>
        To ensure your order arrives before Eid Al-Fitr, order now. The deadline for orders is March 24 for customers outside Riyadh, and March 26 for customers inside Riyadh.
      </Banner>
      <ProductGrid>
        {perfumes.map((perfume) => (
          <ProductCard key={perfume.id} product={perfume} />
        ))}
      </ProductGrid>
    </Container>
  );
};

export default Home;