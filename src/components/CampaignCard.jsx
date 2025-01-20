import React from 'react';
import styled from 'styled-components';



const CampaignCard = ({ campaign }) => {
  const { brand, payout, progress, image, description } = campaign;

  return (
    <Card>
      <Image src={image} alt={`${brand} campaign`} />
      <Details>
        <BrandName>{brand}</BrandName>
        <Description>{description}</Description>
        <Payout>💰 Payout: {payout}</Payout>
        <ProgressBar>
          <Progress style={{ width: `${progress}%` }} />
        </ProgressBar>
        <ProgressText>{progress}% slots filled</ProgressText>
      </Details>
    </Card>
  );
};

export default CampaignCard;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  margin: 1rem;
  width: 300px;

  &:hover {
    transform: scale(1.05);
  }

   @media (max-width: 1024px) {
    width: 45%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* Shadow effect */
  border-radius: 8px;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3); /* Enhanced shadow on hover */
  }
`;

const Details = styled.div`
  padding: 1rem;
`;

const BrandName = styled.h3`
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #666;


  @media (max-width: 768px) {
  font-size: 0.85rem;
  }

  @media (max-width: 480px) {
  font-size: 0.8rem;
  }
`;

const Payout = styled.p`
  font-weight: bold;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const ProgressBar = styled.div`
  background: #f3f3f3;
  border-radius: 8px;
  overflow: hidden;
  height: 8px;
  margin-top: 1rem;
`;

const Progress = styled.div`
  background: #4caf50;
  height: 100%;
  transition: width 0.3s ease-in-out;
`;

const ProgressText = styled.p`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  color: #555;
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

