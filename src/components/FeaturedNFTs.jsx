import React from 'react';

const FeaturedNFTs = () => {
  const nfts = [
    { id: 1, name: "Digital Dream", image: "https://via.placeholder.com/150", price: "0.5 ETH" },
    { id: 2, name: "Cyber Punk", image: "https://via.placeholder.com/150", price: "0.3 ETH" },
    { id: 3, name: "Abstract Art", image: "https://via.placeholder.com/150", price: "0.7 ETH" },
  ];

  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Featured NFTs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nfts.map((nft) => (
            <div key={nft.id} className="bg-gray-800 p-4 rounded-lg">
              <img src={nft.image} alt={nft.name} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold text-white mt-4">{nft.name}</h3>
              <p className="text-gray-400">{nft.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedNFTs;
