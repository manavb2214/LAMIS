import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  margin: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  display: block;
  color: #ccc;
  text-decoration: none;
  margin: 0.5rem 0;

  &:hover {
    color: white;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterTitle>Contact</FooterTitle>
        <p>Our advisors are available to answer all of your questions.</p>
        <FooterLink href="#">WhatsApp</FooterLink>
        <FooterLink href="#">Email</FooterLink>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Lamis Store</FooterTitle>
        <p>Visit us to discover and experience the latest releases at Lamis Valley.</p>
        <FooterLink href="#">Lamis Store</FooterLink>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Support & Assistance</FooterTitle>
        <FooterLink href="#">Returns Platform</FooterLink>
        <FooterLink href="#">Return Policy</FooterLink>
        <FooterLink href="#">Shipping and Delivery Inquiries</FooterLink>
        <FooterLink href="#">Complaints</FooterLink>
        <FooterLink href="#">FAQs</FooterLink>
      </FooterSection>
      <FooterSection>
        <FooterTitle>About Us</FooterTitle>
        <FooterLink href="#">Blog</FooterLink>
        <FooterLink href="#">Join Our Team</FooterLink>
        <FooterLink href="#">Lamis' Story</FooterLink>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Policies & Sales</FooterTitle>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Sales</FooterLink>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;