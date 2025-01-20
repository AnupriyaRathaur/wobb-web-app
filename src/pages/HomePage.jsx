import React from 'react';
import './HomePage.css'; 
import CampaignCard from '../components/CampaignCard';
 

const campaigns = [
  {
    brand: 'Nike',
    payout: 'Barter',
    progress: 75,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Collaborate with Nike for their new sportswear campaign.',
  },
  {
    brand: 'Coca-Cola',
    payout: 'Refunds',
    progress: 50,
    image: 'https://images.unsplash.com/photo-1596803244618-8dbee441d70b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Promote Coca-Cola summer campaign and win rewards.',
  },
  {
    brand: 'Adidas',
    payout: 'Fixed Pay',
    progress: 90,
    image: 'https://images.unsplash.com/photo-1620794341491-76be6eeb6946?q=80&w=394&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Join Adidas for their latest footwear promotion.',
  },
  {
    brand: 'Apple',
    payout: 'Barter',
    progress: 80,
    image: 'https://images.unsplash.com/photo-1609692814858-f7cd2f0afa4f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Showcase the new iPhone and become an Apple ambassador.',
  },
  {
    brand: 'Samsung',
    payout: 'Fixed Pay',
    progress: 60,
    image: 'https://images.unsplash.com/photo-1591122947157-26bad3a117d2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Promote Samsung Galaxy and enjoy exclusive rewards.',
  },
  {
    brand: 'Pepsi',
    payout: 'Refunds',
    progress: 70,
    image: 'https://images.unsplash.com/photo-1646122042791-657527e8aee5?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Celebrate with Pepsi and join their exciting campaign.',
  },
];

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="horizontal-scroll">
        {campaigns.map((campaign, index) => (
          <CampaignCard key={index} campaign={campaign} />
        ))}
      </div>
  </div>
   
  );
};



export default HomePage;

