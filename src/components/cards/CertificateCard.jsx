import React from "react";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  width: auto;
  height: auto;
  max-height: 600px;
  max-width: 768px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 20px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
  
`;
const Image = styled.img`
  width: auto;
  height: auto;
  max-height: 440px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
  padding: 26px 14px;
  
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;


const Button = styled.a`
  width: 80% ;
  position: absolute;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25); // Adds shadow for depth
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  bottom: 30px;
  left: 50%; // Centers the button
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.primary};
  ${({ dull, theme }) =>
    dull &&`
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
`;


const CertificateCard = ({ certificate, setOpenModal }) => {
  return (
    <Card >
      <Image src={certificate.image} />
      <Details>
      <Title>{certificate.title}</Title></Details>
      <Button dull href={certificate.link} target="new">
            View Certificate
      </Button>
    </Card>
  );
};

export default CertificateCard;