import React from 'react';
import { WalletProvider } from './components/WalletContext';
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedNFTs from './components/FeaturedNFTs';
import ScrollingNFTs from './components/ScrollingNFTs';
import Footer from './components/Footer';

const App = () => {
  return (
    <WalletProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
          <Header />
          <Hero />
          <FeaturedNFTs />
          <ScrollingNFTs />
          <Footer />
        </div>
      </ThemeProvider>
    </WalletProvider>
  );
};

export default App;
