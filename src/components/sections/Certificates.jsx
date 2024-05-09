import React, { useState } from "react";
import styled from "styled-components";
import { certificates } from "../../data/constants";
import CertificateCard from "../cards/CertificateCard";

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import  { Pagination, Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

// Initialize Swiper with necessary modules:
SwiperCore.use([Pagination, Navigation, EffectCoverflow, Autoplay]);

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: 0 16px;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  .swiper-slide {
    width: 60%; // Adjust width for better control
    height: auto;
    opacity: 0.7;
    transition: transform 0.5s ease-in-out;
  }

  .swiper-slide-active {
    transform: scale(1.05);
    opacity: 1;
  }

  @media (max-width: 768px) {
    .swiper-slide {
      width: 90%; // Full width on smaller screens
    }
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Certificates = () => {
  const [toggle] = useState("all");

  return (
    <Container id="Certificates">
      <Wrapper>
        <Title>Certificates</Title>
        <Desc style={{ marginBottom: "40px" }}>
          All the Certificates I achieved along with my Journey
        </Desc>
        
        <StyledSwiper
          effect="coverflow"
          slidesPerView="auto"
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500, // Delay in milliseconds between slides (2500ms = 2.5 seconds)
            disableOnInteraction: false, // Continue autoplay after user interactions
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="mySwiper"
        >
          {certificates.map((certificate) => (
            <SwiperSlide key={certificate.id}>
              <CertificateCard certificate={certificate} />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </Wrapper>
    </Container>
  );
};

export default Certificates;