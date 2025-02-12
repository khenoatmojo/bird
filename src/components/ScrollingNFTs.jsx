import React from 'react';
import Marquee from 'react-fast-marquee';

const ScrollingNFTs = () => {
  const nfts = [
    { id: 1, name: "Digital Dream", image: "https://via.placeholder.com/150", price: "0.5 ETH" },
    { id: 2, name: "Cyber Punk", image: "https://via.placeholder.com/150", price: "0.3 ETH" },
    { id: 3, name: "Abstract Art", image: "https://via.placeholder.com/150", price: "0.7 ETH" },
    { id: 4, name: "Future Tech", image: "https://via.placeholder.com/150", price: "0.4 ETH" },
    { id: 5, name: "Space Odyssey", image: "https://via.placeholder.com/150", price: "0.6 ETH" },
  ];

  return (
    <section className="py-12 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Trending NFTs</h2>
        <Marquee speed={50} gradient={false}>
          {nfts.map((nft) => (
            <div key={nft.id} className="mx-4 bg-gray-700 p-4 rounded-lg">
              <img src={nft.image} alt={nft.name} className="w-48 h-48 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold text-white mt-4">{nft.name}</h3>
              <p className="text-gray-400">{nft.price}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ScrollingNFTs;
